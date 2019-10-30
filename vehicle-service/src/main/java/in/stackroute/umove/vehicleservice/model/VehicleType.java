package in.stackroute.umove.vehicleservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import java.text.DecimalFormat;
import java.util.UUID;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class VehicleType {

    private String id = UUID.randomUUID().toString().substring(30);
    private String name;
    private float costPerKm;
    private float costPerMin;
    private String vehicleCC;
    private float mileage;
    private String url;
    @DBRef
    private Fuel fuel;
    private float baseFare;


    public VehicleType(String name, Float costPerKm, Float costPerMin) {

        this.name = name;
        this.costPerKm = costPerKm;
        this.costPerMin = costPerMin;
    }
}