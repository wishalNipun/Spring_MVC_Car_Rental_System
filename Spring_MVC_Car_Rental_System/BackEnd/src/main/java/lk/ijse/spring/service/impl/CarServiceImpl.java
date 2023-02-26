package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addCar(CarDTO dto) {
        if (repo.existsById(dto.getRegistrationNumber())) {
            throw new RuntimeException("Customer "+dto.getRegistrationNumber()+" Already Exist..!");
        }

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadDir.mkdir();

            dto.getImg1().transferTo(new File(uploadDir.getAbsolutePath() + "/" + dto.getImg1().getOriginalFilename()));
            dto.setFrontImageLocation("uploads/"+dto.getImg1().getOriginalFilename());

            dto.getImg2().transferTo(new File(uploadDir.getAbsolutePath() + "/" + dto.getImg2().getOriginalFilename()));
            dto.setBackImageLocation("uploads/"+dto.getImg2().getOriginalFilename());

            dto.getImg3().transferTo(new File(uploadDir.getAbsolutePath() + "/" + dto.getImg3().getOriginalFilename()));
            dto.setBgTransparentImageLocation("uploads/"+dto.getImg3().getOriginalFilename());

            dto.getImg4().transferTo(new File(uploadDir.getAbsolutePath() + "/" + dto.getImg4().getOriginalFilename()));
            dto.setSideImageLocation("uploads/"+dto.getImg4().getOriginalFilename());


            repo.save(mapper.map(dto, Car.class));

        } catch (URISyntaxException|IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteCar(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Car "+id+" Not Available to Delete..!");
        }
        repo.deleteById(id);
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (!repo.existsById(dto.getRegistrationNumber())){
            throw new RuntimeException("Car "+dto.getRegistrationNumber()+" Not Available to Update..!");
        }
        repo.save( mapper.map(dto, Car.class));
    }

    @Override
    public ArrayList<CarDTO> getAllCars() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }
    @Override
    public CarDTO searchCarByRegistrationNumber(String registrationNumber) {

        return mapper.map( repo.findCarByRegistrationNumber(registrationNumber),CarDTO.class);
    }
}
