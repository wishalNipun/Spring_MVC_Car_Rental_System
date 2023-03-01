package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Rental {
    @Id
    private String rentalId;
    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH,CascadeType.MERGE})
    private Customer customer;
    private LocalDate date;
    private double amount;
    private double  totalDamageWaiverAmount;
    private String pickupLocation;
    private String returnLocation;

    @OneToMany(mappedBy = "rental", cascade = {CascadeType.ALL})
    private List<RentalDetail> rentalDetailList;

}


