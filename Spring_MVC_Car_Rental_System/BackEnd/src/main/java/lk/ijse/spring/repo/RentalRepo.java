package lk.ijse.spring.repo;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepo extends JpaRepository<Rental,String> {

}
