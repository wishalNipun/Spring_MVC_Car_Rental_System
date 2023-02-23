package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDTO {
    private String name;
    private String nic;
    private String drivingLicense;
    private String email;
    private String password;
    private String contactNumber;
    private String address;
    private String imageLocation;
    private String status;
    private MultipartFile img;

    public CustomerDTO(String name, String nic, String drivingLicense, String email, String password, String contactNumber, String address, String imageLocation, String status) {
        this.name = name;
        this.nic = nic;
        this.drivingLicense = drivingLicense;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.address = address;
        this.imageLocation = imageLocation;
        this.status = status;
    }

    public CustomerDTO(String name, String nic, String drivingLicense, String email, String password, String contactNumber, String address, String status, MultipartFile img) {
        this.name = name;
        this.nic = nic;
        this.drivingLicense = drivingLicense;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.address = address;
        this.status = status;
        this.img = img;
    }
}
