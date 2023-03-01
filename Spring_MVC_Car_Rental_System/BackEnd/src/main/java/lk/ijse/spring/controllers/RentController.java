package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.service.CustomerService;
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



}


