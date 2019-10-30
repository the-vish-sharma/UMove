package in.stackroute.umove.zoneservice.repository;

import in.stackroute.umove.zoneservice.model.Fuel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FuelRepo extends MongoRepository<Fuel,String> {
    //    Fuel findByName(String name, Pageable pageable);
    Fuel findByNameIgnoreCase(String name);
    Page<Fuel> findAll(Pageable pageable);

}