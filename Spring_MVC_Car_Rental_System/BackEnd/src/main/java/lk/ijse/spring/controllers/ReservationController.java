package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.*;

import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/rentalDetail")
@CrossOrigin
public class ReservationController {

    @Autowired
    private ReservationService service;

    @GetMapping
    public ResponseUtil getAllReservations(){
        ArrayList<ReservationDTO> allReservation = service.getAllReservation();
        return new ResponseUtil("200"," Success.!",allReservation);
    }

    @PutMapping()
    public ResponseUtil updateReservation(@RequestParam String id,@RequestParam String status) {


        service.updateReservation(id,status);
        return new ResponseUtil("200",id+": Updated.!",null);

    }

    @GetMapping(params = "emm")
    public ResponseUtil getRents(String emm) {
        ArrayList<RentalDetail_DTO> allReservationUsingEmail = service.getAllReservationUsingEmail(emm);
        return new ResponseUtil("200", "request Sent", allReservationUsingEmail);
    }

}


