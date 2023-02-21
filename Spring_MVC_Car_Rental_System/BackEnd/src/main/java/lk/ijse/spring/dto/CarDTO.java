package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDTO {
    private String registrationNumber;
    private String type;
    private String brand;
    private String model;
    private String fuelType;
    private String transmissionType;
    private int numberOfPassengers;
    private String color;
    private long lastServiceMileage;
    private int freeMileage;
    private String frontImageLocation;
    private String sideImageLocation;
    private String backImageLocation;
    private String bgTransparentImageLocation;
    private double dailyRate;
    private double monthlyRate;
    private double priceForExtraKM;
    private String availability;
    private MultipartFile img1;
    private MultipartFile img2;
    private MultipartFile img3;
    private MultipartFile img4;

    public CarDTO(String registrationNumber, String type, String brand, String model, String fuelType, String transmissionType, int numberOfPassengers, String color, long lastServiceMileage, int freeMileage, double dailyRate, double monthlyRate, double priceForExtraKM, String availability, MultipartFile img1, MultipartFile img2, MultipartFile img3, MultipartFile img4) {
        this.registrationNumber = registrationNumber;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
        this.transmissionType = transmissionType;
        this.numberOfPassengers = numberOfPassengers;
        this.color = color;
        this.lastServiceMileage = lastServiceMileage;
        this.freeMileage = freeMileage;
        this.dailyRate = dailyRate;
        this.monthlyRate = monthlyRate;
        this.priceForExtraKM = priceForExtraKM;
        this.availability = availability;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
    }



    public CarDTO(String registrationNumber, String type, String brand, String model, String fuelType, String transmissionType, int numberOfPassengers, String color, long lastServiceMileage, int freeMileage, String frontImageLocation, String sideImageLocation, String backImageLocation, String bgTransparentImageLocation, double dailyRate, double monthlyRate, double priceForExtraKM, String availability) {
        this.registrationNumber = registrationNumber;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
        this.transmissionType = transmissionType;
        this.numberOfPassengers = numberOfPassengers;
        this.color = color;
        this.lastServiceMileage = lastServiceMileage;
        this.freeMileage = freeMileage;
        this.frontImageLocation = frontImageLocation;
        this.sideImageLocation = sideImageLocation;
        this.backImageLocation = backImageLocation;
        this.bgTransparentImageLocation = bgTransparentImageLocation;
        this.dailyRate = dailyRate;
        this.monthlyRate = monthlyRate;
        this.priceForExtraKM = priceForExtraKM;
        this.availability = availability;
    }
}
