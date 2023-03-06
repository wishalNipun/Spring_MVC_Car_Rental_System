package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.*;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.PaymentRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    private PaymentRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RentalRepo rentalrepo;



    @Override
    public void addPayment(Payment_DTO dto) {
    //    Optional<Rental> byId = rentalrepo.findById(dto.getRentalId());
        String id = generatePaymentId();
        Rental rentUsingRentId = rentalrepo.findRentUsingRentId(dto.getRentalId());
        Payment map = mapper.map(dto, Payment.class);
        map.setPaymentId(id);
        map.setDate(LocalDate.now());
        map.setRental(rentUsingRentId);


        if (repo.existsById(dto.getRentalId())) {
            throw new RuntimeException("Rental "+dto.getRentalId()+" Already Exist..!");
        }

        repo.save(map);
    }

    @Override
    public String generatePaymentId() {
        String lastId = repo.generateId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "P00-000" + tempId;
            } else if (tempId <= 99) {
                id = "P00-00" + tempId;
            } else if (tempId <= 999) {
                id = "P00-0" + tempId;
            } else if (tempId <= 9999) {
                id = "P00-" + tempId;
            }
        } else {
            id = "P00-0001";
        }
        return id;
    }

    @Override
    public ArrayList<PaymentDTO> getAllPayments() {
        return null;
    }
}
