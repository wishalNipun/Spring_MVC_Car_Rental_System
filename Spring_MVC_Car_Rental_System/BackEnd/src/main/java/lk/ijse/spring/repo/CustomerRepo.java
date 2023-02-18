package lk.ijse.spring.repo;

import lk.ijse.spring.dto.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {
}
