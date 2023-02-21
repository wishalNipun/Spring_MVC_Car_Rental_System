package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
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

    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public void updateCar(CarDTO dto) {

    }

    @Override
    public ArrayList<CarDTO> getAllCars() {
        return null;
    }

    @Override
    public CarDTO searchCarByRegistrationNumber(String registrationNumber) {
        return null;
    }
}
