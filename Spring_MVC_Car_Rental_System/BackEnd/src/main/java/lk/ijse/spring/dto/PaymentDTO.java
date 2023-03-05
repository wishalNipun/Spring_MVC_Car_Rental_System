package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Rental;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private Rental rental;
    private String paymentStatus;
    private LocalDate date;
    private double amount;
    private double damageCost;
    private String damageDescription;
    private long extraMileage;
    private double costPerExtraMileage;

}
