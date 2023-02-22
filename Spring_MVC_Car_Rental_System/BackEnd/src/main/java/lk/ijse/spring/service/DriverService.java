package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverService {
    public void addDriver(DriverDTO dto);

    public void deleteDriver(String id);

    public void updateDriver(DriverDTO dto);

    public ArrayList<DriverDTO> getAllDrivers();

    public DriverDTO searchDriverByDriverID(String name);
}
