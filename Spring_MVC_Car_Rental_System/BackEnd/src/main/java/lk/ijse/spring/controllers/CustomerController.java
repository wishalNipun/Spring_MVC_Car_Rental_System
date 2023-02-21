package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping
    public ResponseUtil saveCustomer(CustomerDTO dto){
        System.out.println(dto.toString());
        service.addCustomer(dto);
        return new ResponseUtil("200",dto.getName()+ " Added.!",null);
    }

    @GetMapping
    public String get(){

        return "ss";
    }

}
