package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;

import java.util.ArrayList;

public interface CarService {
    public void addCar(CarDTO dto);

    public void deleteCar(String id);

    public void updateCar(CarDTO dto);

    public ArrayList<CarDTO> getAllCars();

    public CarDTO searchCarByRegistrationNumber(String registrationNumber);
}
