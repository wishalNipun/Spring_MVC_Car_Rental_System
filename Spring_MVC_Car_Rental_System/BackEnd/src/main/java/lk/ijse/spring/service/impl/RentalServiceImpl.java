package lk.ijse.spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.dto.*;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.RentalDetail;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.CountDays;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.ArrayList;

@Service
@Transactional
public class RentalServiceImpl implements RentalService {
    @Autowired
    private RentalRepo repo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void addRental(RentalDTO dto) {


        String setRentalId = generateRentalId();
        String returnLocation = dto.getReturnLocation();
        String pickupLocation = dto.getPickupLocation();
        String mail = dto.getMail();

        Customer customer = customerRepo.findCustomerByEmail(mail);
        System.out.println(customer);


        Rental rental = new Rental();

        rental.setRentalId(setRentalId);
        rental.setCustomer(customer);
        rental.setDate(LocalDate.now());
        rental.setPickupLocation(pickupLocation);
        rental.setReturnLocation(returnLocation);
        rental.setRentalDetailList(new ArrayList<>());

        int count =0;
        double damageWaveCost=0;
        double amount =0;
        for (String s : dto.getRentalDetailList()) {
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                CartDTO cartDTO = objectMapper.readValue(s, CartDTO.class);

                RentalDetail rentalDetail = new RentalDetail();

                String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
                File uploadDir = new File(projectPath + "/uploads");
                System.out.println(projectPath);
                uploadDir.mkdir();

                MultipartFile file = dto.getFile().get(count);
                count=count+1;
                System.out.println(file);
                file.transferTo(new File(uploadDir.getAbsolutePath() + "/" + file.getOriginalFilename()));
                rentalDetail.setDamageWaiverImageLocation("uploads/"+file.getOriginalFilename());


                if (cartDTO.getDriver() == "added"){
                    //rentalDetail.setDriver();
                }

                Car car = carRepo.findCarByRegistrationNumber(cartDTO.getId());
                rentalDetail.setCar(car);
                rentalDetail.setPickupDate(LocalDate.parse(cartDTO.getPickUpdate()));
                rentalDetail.setReturnDate(LocalDate.parse(cartDTO.getReturnDate()));
                rentalDetail.setId(rental.getRentalId()+"-"+car.getRegistrationNumber());
                rentalDetail.setStatus("Pending");
                rentalDetail.setRental(rental);
                switch (rentalDetail.getCar().getType()){
                    case "General":
                        damageWaveCost=damageWaveCost+10000;
                        break;
                    case "Luxury":
                        damageWaveCost=damageWaveCost+20000;
                        break;
                    case "Premium":
                        damageWaveCost=damageWaveCost+15000;
                        break;
                    default:

                }


                ArrayList<LocalDate> dates = CountDays.getDates(rentalDetail.getPickupDate(), rentalDetail.getReturnDate());

                int size = dates.size();
                if(size>=30){
                    while(size>=30){
                        amount=amount+(rentalDetail.getCar().getMonthlyRate());
                        size=size-30;
                    }
                    amount=amount+(size*rentalDetail.getCar().getMonthlyRate());
                }else{
                    amount=amount+(size*rentalDetail.getCar().getMonthlyRate());
                }

                rental.setTotalDamageWaiverAmount(damageWaveCost);
                rental.setAmount(amount);
                rental.getRentalDetailList().add(rentalDetail);


            } catch (JsonProcessingException  e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }
        }
        count=0;

        repo.save(rental);

    }

    @Override
    public String generateRentalId() {
        String lastId = repo.generateId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "R00-000" + tempId;
            } else if (tempId <= 99) {
                id = "R00-00" + tempId;
            } else if (tempId <= 999) {
                id = "R00-0" + tempId;
            } else if (tempId <= 9999) {
                id = "R00-" + tempId;
            }
        } else {
            id = "R00-0001";
        }
        return id;
    }

    @Override
    public ArrayList<Rental_DTO> getAllRents() {

        return mapper.map(repo.findAll(), new TypeToken<ArrayList<Rental_DTO>>() {
        }.getType());
    }


}
