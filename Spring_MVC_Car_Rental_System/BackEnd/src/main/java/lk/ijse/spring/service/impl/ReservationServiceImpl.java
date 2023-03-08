package lk.ijse.spring.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.ijse.spring.dto.*;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.RentalDetail;
import lk.ijse.spring.repo.*;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.service.ReservationService;
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
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RentalRepo rentrepo;
    @Autowired

    private CustomerRepo crepo;
    @Override
    public void updateReservation(ReservationDTO dto) {

    }

    @Override
    public ArrayList<ReservationDTO> getAllReservation() {

        ArrayList<ReservationDTO> lists = new ArrayList<>();
        for (RentalDetail rentalDetail : repo.findAll()) {

            ReservationDTO map = mapper.map(rentalDetail, ReservationDTO.class);

            Customer customer = rentalDetail.getRental().getCustomer();
            String pickupLocation = rentalDetail.getRental().getPickupLocation();
            String returnLocation = rentalDetail.getRental().getReturnLocation();

            map.setCustomer(customer);
            map.setPickupLocation(pickupLocation);
            map.setReturnLocation(returnLocation);
            map.setRentalId(rentalDetail.getRental().getRentalId());
            map.setTotalDamageWaiverAmount(rentalDetail.getDamageWaiverAmount());
            lists.add(map);
        }

        return lists;
    }

    @Override
    public void updateReservation(String id, String status) {
        Optional<RentalDetail> byId = repo.findById(id);

        RentalDetail map = mapper.map(byId, RentalDetail.class);
        map.setStatus(status);

        repo.save(map);
    }

    @Override
    public ArrayList<RentalDetail_DTO> getAllReservationUsingEmail(String mail) {
        Customer customerByEmail = crepo.findCustomerByEmail(mail);
        String nic = customerByEmail.getNic();
        System.out.println(nic);
        String latestRentUsingNIC = rentrepo.findLatestRentUsingNIC(nic);

        ArrayList<RentalDetail_DTO> list = new ArrayList<>();
        Rental rentUsingRentId = rentrepo.findRentUsingRentId(latestRentUsingNIC);
        System.out.println("v"+latestRentUsingNIC);
        System.out.println(rentUsingRentId.getRentalId());


        for (RentalDetail rentalDetail : repo.findAll()) {
            if (rentalDetail.getRental().getRentalId() ==rentUsingRentId.getRentalId()){
                RentalDetail_DTO map = mapper.map(rentalDetail, RentalDetail_DTO.class);
                map.setReturnLocation(rentUsingRentId.getReturnLocation());
                map.setPickupLocation(rentUsingRentId.getPickupLocation());
                list.add(map);
            }

        }
        System.out.println(list);


        return list;

    }


}
