package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartDTO {
    private String id;
    private Object file;
    private String filename;
    private String pickUpdate;
     private String returnDate;
    private String driver;
}
