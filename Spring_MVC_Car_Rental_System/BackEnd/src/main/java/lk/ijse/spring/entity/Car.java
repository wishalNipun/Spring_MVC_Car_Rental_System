package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Car {
    @Id
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

}
