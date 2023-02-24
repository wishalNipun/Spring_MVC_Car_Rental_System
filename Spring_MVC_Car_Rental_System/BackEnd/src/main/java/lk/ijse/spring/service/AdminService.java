package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

public interface AdminService {
    public void addAdmin(AdminDTO dto);

    public void deleteAdmin(String id);

    public void updateAdmin(AdminDTO dto);

    public ArrayList<AdminDTO> getAllAdmins();

}
