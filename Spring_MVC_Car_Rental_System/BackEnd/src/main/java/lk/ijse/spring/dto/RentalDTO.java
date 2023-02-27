package lk.ijse.spring.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.spring.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDTO {
    private String registrationId;
    private String mail;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate PickUpDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate ReturnDate;
    private double  totalDamageWaiverAmount;
    private String pickupLocation;
    private String returnLocation;
    private String imageLocation;


    private MultipartFile img;

    public RentalDTO(String registrationId, String mail, LocalDate pickUpDate, LocalDate returnDate, double totalDamageWaiverAmount, String pickupLocation, String returnLocation, MultipartFile img) {
        this.registrationId = registrationId;
        this.mail = mail;
        PickUpDate = pickUpDate;
        ReturnDate = returnDate;
        this.totalDamageWaiverAmount = totalDamageWaiverAmount;
        this.pickupLocation = pickupLocation;
        this.returnLocation = returnLocation;
        this.img = img;
    }

    public RentalDTO(String registrationId, String mail, LocalDate pickUpDate, LocalDate returnDate, double totalDamageWaiverAmount, String pickupLocation, String returnLocation, String imageLocation) {
        this.registrationId = registrationId;
        this.mail = mail;
        PickUpDate = pickUpDate;
        ReturnDate = returnDate;
        this.totalDamageWaiverAmount = totalDamageWaiverAmount;
        this.pickupLocation = pickupLocation;
        this.returnLocation = returnLocation;
        this.imageLocation = imageLocation;
    }
}
