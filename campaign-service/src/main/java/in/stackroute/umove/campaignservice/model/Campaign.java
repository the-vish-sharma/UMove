package in.stackroute.umove.campaignservice.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


import java.time.LocalDate;
import java.util.UUID;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Campaign {

    private String id= UUID.randomUUID().toString().substring(30);
    private String name;
    private String objective;
    private LocalDate startDate;
    private LocalDate endDate;
    private String promocode;
    private int discountPercent;
    private int cost;
    private int targetCustomers;
    private int achievedCustomer;


    public Campaign(String name, String objective, LocalDate startDate, LocalDate endDate, String promocode,int discountPercent) {
        this.name = name;
        this.objective = objective;
        this.startDate = startDate;
        this.endDate = endDate;
        this.promocode=promocode;
        this.discountPercent = discountPercent;
    }

//    public String get_id()
//    {
//        return _id.toHexString();
//    }
//
//    public void set_id(ObjectId _id)
//    {
//        this._id = _id;
//    }

}
