package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.Payment_DTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {

    @PostMapping
    public ResponseUtil savePayment(Payment_DTO dto){

        //service.addDriver(dto);
        return new ResponseUtil("200",dto+ " Added.!",null);
    }


}


