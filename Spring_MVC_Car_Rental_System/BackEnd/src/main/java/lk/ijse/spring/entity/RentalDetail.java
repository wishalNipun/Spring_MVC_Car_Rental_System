package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
    private Driver driver;
    @ManyToOne
    private Car car;
    private String damageWaiverImageLocation;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private String status;
}
