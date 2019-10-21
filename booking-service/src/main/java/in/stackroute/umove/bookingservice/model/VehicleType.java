package in.stackroute.umove.bookingservice.model;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleType {
    private String id;
    private String name;
    private float costkm;
    private float costtime;
    private float costlt=100;
    private Category category;
    private String vehiclecc;
    private float kilometer;
    private String url;


    public VehicleType(String name, int costkm, int costtime) {

        this.name = name;
        this.costkm = costkm;
        this.costtime = costtime;
    }

}
