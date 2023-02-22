package lk.ijse.spring.dto;

import lk.ijse.spring.entity.RentalDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverID;
    private String name;
    private String nic;
    private String address;
    private String drivingLicense;//wait
    private LocalDate dob;
    private String status;
}
