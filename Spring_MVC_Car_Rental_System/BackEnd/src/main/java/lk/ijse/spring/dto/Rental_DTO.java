package lk.ijse.spring.dto;


import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentalDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Rental_DTO {

    private String rentalId;
    private Customer customer;
    private LocalDate date;
    private double amount;
    private double  totalDamageWaiverAmount;
    private String pickupLocation;
    private String returnLocation;

}
