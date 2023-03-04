package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

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
    @JoinColumn(name = "rental_rentalId",referencedColumnName = "rentalId",insertable = true,updatable = false)
    private Rental rental;
    @ManyToOne
    private Driver driver;
    @ManyToOne
    @JoinColumn(name = "car_registrationNumber",referencedColumnName = "registrationNumber",insertable = true,updatable = false)
    private Car car;
    private String damageWaiverImageLocation;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private double amount;
    private double damageWaiverAmount;
    private String status;


}
