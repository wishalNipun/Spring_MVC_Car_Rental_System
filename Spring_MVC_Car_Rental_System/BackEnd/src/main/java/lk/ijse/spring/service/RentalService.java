package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.Rental_DTO;

import java.util.ArrayList;

public interface RentalService {
    public void addRental(RentalDTO dto);
    public String generateRentalId();

    public ArrayList<Rental_DTO> getAllRents();

}
