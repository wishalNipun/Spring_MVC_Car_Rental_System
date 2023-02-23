package lk.ijse.spring.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;



@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverID;
    private String name;
    private String nic;
    private String address;
    private String drivingLicense;//wait
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dob;
    private String status;
}
