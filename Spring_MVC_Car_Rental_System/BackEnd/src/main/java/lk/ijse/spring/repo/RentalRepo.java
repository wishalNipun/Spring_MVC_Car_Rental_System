package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RentalRepo extends JpaRepository<Rental,String> {
    @Query(value = "SELECT rentalId FROM Rental ORDER BY rentalId DESC LIMIT 1",nativeQuery = true)
    String generateId();


    @Query(value = "SELECT * FROM Rental  where customer_nic=?1 ORDER BY customer_nic DESC LIMIT 1",nativeQuery = true)
    Rental findLatestRentUsingId(String customer_nic);

    @Query(value = "SELECT * FROM Rental  where rentalId=?1",nativeQuery = true)
    Rental findRentUsingRentId(String customer_nic);
}
