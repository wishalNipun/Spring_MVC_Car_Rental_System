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
        System.out.println(dto.toString());
        service.addRental(dto);
        return new ResponseUtil("200",dto.getMail()+ " Added.!",null);
    }

//    @GetMapping
//    public ResponseUtil getAllCustomers(){
//        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
//        return new ResponseUtil("200"," Success.!",allCustomers);
//    }
//
//
//    @GetMapping(params = "email")
//    public ResponseUtil checkLogCustomer(String email,String password) {
//        CustomerDTO dto = service.searchCustomerByEmailAndPassword(email,password);
//        return new ResponseUtil("200", "Login Success", dto);
//    }
//    @GetMapping(params = "em")
//    public ResponseUtil checkLogCustomer(String em) {
//        CustomerDTO customerDTO = service.searchCustomerByEmail(em);
//        return new ResponseUtil("200", "request Sent", customerDTO);
//    }
//
//
//    @PutMapping
//    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto){
//        service.updateCustomer(dto);
//        return new ResponseUtil("200",dto.getNic()+": Updated.!",null);
//    }
//    @PutMapping("/")
//    public ResponseUtil updateCustomerReservation(@RequestParam String nic,@RequestParam String status) {
//
//
//        service.updateCustomerReservation(nic,status);
//        return new ResponseUtil("200",nic+": Updated.!",null);

}


