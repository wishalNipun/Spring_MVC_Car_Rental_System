package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentalDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepo extends JpaRepository<RentalDetail,String> {


}
