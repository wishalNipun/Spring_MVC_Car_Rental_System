package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    private DriverService service;

    @PostMapping
    public ResponseUtil saveDriver(DriverDTO dto){
        System.out.println(dto.toString());
       // service.addDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+ " Added.!",null);
    }

    @GetMapping
    public String get(){

        return "ss";
    }

}
