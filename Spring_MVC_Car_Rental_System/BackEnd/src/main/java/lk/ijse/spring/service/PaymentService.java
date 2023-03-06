package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.dto.Payment_DTO;

import java.util.ArrayList;

public interface PaymentService {
    public void addPayment(Payment_DTO dto);

    public String generatePaymentId();
    public ArrayList<PaymentDTO> getAllPayments();

}
