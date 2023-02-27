package lk.ijse.spring.repo;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,String> {
    List<Customer> findCustomerByStatus(String status);
    Customer  findCustomerByEmailAndPassword(String email,String password);

    Customer findCustomerByNic(String nic);

    Customer findCustomerByEmail(String email);
}
