package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void addAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getAdminId())) {
            throw new RuntimeException("Admin "+dto.getAdminId()+" Already Exist..!");
        }

        repo.save(mapper.map(dto, Admin.class));
    }

    @Override
    public void deleteAdmin(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Driver "+id+" Not Available to Delete..!");
        }
        repo.deleteById(id);
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getAdminId())){
            throw new RuntimeException("Driver "+dto.getAdminId()+" Not Available to Update..!");
        }
        repo.save( mapper.map(dto, Admin.class));
    }

    @Override
    public ArrayList<AdminDTO> getAllAdmins() {

        return mapper.map(repo.findAll(), new TypeToken<ArrayList<AdminDTO>>() {
        }.getType());
    }


}
