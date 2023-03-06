package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.Payment_DTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService service;

    @PostMapping
    public ResponseUtil savePayment(@RequestBody Payment_DTO dto){

        service.addPayment(dto);
        return new ResponseUtil("200",dto.getRentalId()+ " Added.!",null);
    }


}


