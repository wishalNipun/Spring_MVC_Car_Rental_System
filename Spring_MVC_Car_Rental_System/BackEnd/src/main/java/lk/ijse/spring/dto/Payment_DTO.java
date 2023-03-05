package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Rental;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Payment_DTO {
    private String rentalId;
    private double amount;
    private double damageCost;
    private String damageDescription;
    private long extraMileage;
    private double costPerExtraMileage;
    private double driverWages;
}
