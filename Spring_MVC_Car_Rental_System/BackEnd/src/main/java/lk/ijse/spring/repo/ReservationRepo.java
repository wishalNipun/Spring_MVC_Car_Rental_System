package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentalDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<RentalDetail,String> {


}
