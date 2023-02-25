package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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
    public ResponseUtil getAllCustomers(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        return new ResponseUtil("200"," Success.!",allCustomers);
    }


    @GetMapping(params = "email")
    public ResponseUtil checkLogCustomer(String email,String password) {
        CustomerDTO dto = service.searchCustomerByEmailAndPassword(email,password);
        return new ResponseUtil("200", "Login Success", dto);
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto){
        service.updateCustomer(dto);
        return new ResponseUtil("200",dto.getNic()+": Updated.!",null);
    }
    @PutMapping("/")
    public ResponseUtil updateCustomerReservation(@RequestParam String nic,@RequestParam String status) {


        service.updateCustomerReservation(nic,status);
        return new ResponseUtil("200",nic+": Updated.!",null);

    }

}
