package lk.ijse.spring.entity;

import lk.ijse.spring.entity.pk.RentalDetailPK;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalDetail {

    @EmbeddedId
    private RentalDetailPK id;
    @ManyToOne
    private Driver driver;
    private String damageWaiverImageLocation;
    private String status;
}
