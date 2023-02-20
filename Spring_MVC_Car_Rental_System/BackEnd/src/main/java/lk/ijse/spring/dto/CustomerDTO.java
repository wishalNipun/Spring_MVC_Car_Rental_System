package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


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
    private byte[] img;

    public CustomerDTO(String name, String nic, String drivingLicense, String email, String password, String contactNumber, String address, String imageLocation) {
        this.name = name;
        this.nic = nic;
        this.drivingLicense = drivingLicense;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.address = address;
        this.imageLocation = imageLocation;
    }

    public CustomerDTO(String name, String nic, String drivingLicense, String email, String password, String contactNumber, String address, byte[] img) {
        this.name = name;
        this.nic = nic;
        this.drivingLicense = drivingLicense;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.address = address;
        this.img = img;
    }
}
