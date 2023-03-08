package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.entity.RentalDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepo extends JpaRepository<RentalDetail,String> {

//    @Query(value = "SELECT * FROM RentalDetail  where rentalId=?1",nativeQuery = true)
//    List<RentalDetail>findRentUsingRentId(String id);
}
