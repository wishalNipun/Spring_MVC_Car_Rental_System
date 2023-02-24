package lk.ijse.spring.controllers;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping
    public ResponseUtil saveAdmin(AdminDTO dto){

        service.addAdmin(dto);
        return new ResponseUtil("200",dto.getAdminId()+ " Added.!",null);
    }

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmins = service.getAllAdmins();
        return new ResponseUtil("200"," Success.!",allAdmins);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO dto){
        service.updateAdmin(dto);
        return new ResponseUtil("200",dto.getAdminId()+": Updated.!",null);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteAdmin(String id){
        service.deleteAdmin(id);
        return new ResponseUtil("200",id+" : Deleted.!",null);
    }
}
