package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Payment {

    @Id
    private String paymentId;
    @OneToOne
    private Rental rental;
    private String paymentStatus;
    private LocalDate date;
    private double amount;
    private double damageCost;
    private String damageDescription;
    private long extraMileage;
    private double costPerExtraMileage;
}
