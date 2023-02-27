package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDetail {

    @Id
    private String id;
    @ManyToOne
    @JoinColumn(name = "rental_rentalId",referencedColumnName = "rentalId",insertable = false,updatable = false)
    private Rental rental;
    @ManyToOne
    private Driver driver;
    @ManyToOne
    @JoinColumn(name = "car_registrationNumber",referencedColumnName = "registrationNumber",insertable = false,updatable = false)
    private Car car;
    private String damageWaiverImageLocation;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private String status;
}
