package lk.ijse.spring.service;



import lk.ijse.spring.dto.ReservationDTO;

import java.util.ArrayList;

public interface ReservationService {

    public void updateReservation(ReservationDTO dto);

    public ArrayList<ReservationDTO> getAllReservation();
    public void updateReservation(String id,String status);
    public ArrayList<ReservationDTO> getAllReservationUsingEmail(String mail);
}
