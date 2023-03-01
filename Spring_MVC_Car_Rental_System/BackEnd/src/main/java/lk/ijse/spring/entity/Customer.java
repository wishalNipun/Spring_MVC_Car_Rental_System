package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.UniqueConstraint;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Customer {

    private String name;
    @Id
    private String nic;
    private String drivingLicense;
    private String email;
    private String password;
    private String contactNumber;
    private String address;
    private String imageLocation;
    private String status;


}
