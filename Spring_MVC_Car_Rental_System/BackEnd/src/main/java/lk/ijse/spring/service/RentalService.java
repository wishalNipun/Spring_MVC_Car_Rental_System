package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RentalDTO;

import java.util.ArrayList;

public interface RentalService {
    public void addRental(RentalDTO dto);
    public String generateRentalId();
}
