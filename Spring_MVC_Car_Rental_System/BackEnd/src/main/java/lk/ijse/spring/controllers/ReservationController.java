package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.RentalDetailDTO;
import lk.ijse.spring.dto.ReservationDTO;
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

}


