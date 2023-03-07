package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.Rental_DTO;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/rental")
@CrossOrigin
public class RentController {

    @Autowired
    private RentalService service;

    @PostMapping
    public ResponseUtil saveReservation(RentalDTO dto){

        service.addRental(dto);
        return new ResponseUtil("200",dto.getMail()+ " Reservation Added.!",null);
    }

    @GetMapping
    public ResponseUtil getAllRents(){
        ArrayList<Rental_DTO> allRents = service.getAllRents();
        return new ResponseUtil("200"," Success.!",allRents);
    }

    @GetMapping(params = "nic")
    public ResponseUtil checkLogCustomer(String nic) {
        Rental_DTO dto = service.searchRentByNIC(nic);
        return new ResponseUtil("200", "Login Success", dto);
    }



}


