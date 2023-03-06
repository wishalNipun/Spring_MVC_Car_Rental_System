package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment,String> {
    @Query(value = "SELECT paymentId FROM payment ORDER BY paymentId DESC LIMIT 1",nativeQuery = true)
    String generateId();


}
