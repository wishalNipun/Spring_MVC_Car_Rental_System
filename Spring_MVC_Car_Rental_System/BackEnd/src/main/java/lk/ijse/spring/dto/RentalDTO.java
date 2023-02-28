package lk.ijse.spring.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentalDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDTO {
    private String rentalId;
    private String mail;
    private String pickupLocation;
    private String returnLocation;


    private List<String> rentalDetailList;
    private List<MultipartFile> file;
//
//    public RentalDTO(String rentalId, String registrationId, String mail, String pickUpDate, String returnDate, String driver, String pickupLocation, String returnLocation, MultipartFile img) {
//        this.rentalId = rentalId;
//        this.registrationId = registrationId;
//        this.mail = mail;
//        PickUpDate = pickUpDate;
//        ReturnDate = returnDate;
//        this.driver = driver;
//        this.pickupLocation = pickupLocation;
//        this.returnLocation = returnLocation;
//        this.img = img;
//    }
//
//    public RentalDTO(String rentalId, String registrationId, String mail, String pickUpDate, String returnDate, String driver, String pickupLocation, String returnLocation, String imageLocation) {
//        this.rentalId = rentalId;
//        this.registrationId = registrationId;
//        this.mail = mail;
//        PickUpDate = pickUpDate;
//        ReturnDate = returnDate;
//        this.driver = driver;
//        this.pickupLocation = pickupLocation;
//        this.returnLocation = returnLocation;
//        this.imageLocation = imageLocation;
//    }
//
//    //    public RentalDTO(String registrationId, String mail, LocalDate pickUpDate, LocalDate returnDate, double totalDamageWaiverAmount, String pickupLocation, String returnLocation, MultipartFile img) {
////        this.registrationId = registrationId;
////        this.mail = mail;
////        PickUpDate = pickUpDate;
////        ReturnDate = returnDate;
////        this.totalDamageWaiverAmount = totalDamageWaiverAmount;
////        this.pickupLocation = pickupLocation;
////        this.returnLocation = returnLocation;
////        this.img = img;
////    }
////
////    public RentalDTO(String registrationId, String mail, LocalDate pickUpDate, LocalDate returnDate, double totalDamageWaiverAmount, String pickupLocation, String returnLocation, String imageLocation) {
////        this.registrationId = registrationId;
////        this.mail = mail;
////        PickUpDate = pickUpDate;
////        ReturnDate = returnDate;
////        this.totalDamageWaiverAmount = totalDamageWaiverAmount;
////        this.pickupLocation = pickupLocation;
////        this.returnLocation = returnLocation;
////        this.imageLocation = imageLocation;
////    }
}
