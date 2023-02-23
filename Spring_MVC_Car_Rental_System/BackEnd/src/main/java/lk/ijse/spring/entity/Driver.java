package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Driver {

    @Id
    private String driverId;
    private String name;
    private String nic;
    private String address;
    private String drivingLicense;
    private LocalDate dob;
    private String status;

    @OneToMany(mappedBy = "driver")
    private List<RentalDetail> rentalDetailList;
}
