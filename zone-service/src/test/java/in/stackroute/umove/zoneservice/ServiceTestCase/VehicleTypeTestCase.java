package in.stackroute.umove.zoneservice.ServiceTestCase;

import in.stackroute.umove.zoneservice.model.VehicleType;
import in.stackroute.umove.zoneservice.repository.VehicleTypeRepo;
import in.stackroute.umove.zoneservice.service.ServiceVehicleType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@SpringBootTest
public class VehicleTypeTestCase {
    @Autowired
    private ServiceVehicleType serviceType;


    @MockBean
    private VehicleTypeRepo typeRepo;


    @Test
    public  void getTypesTest(){
        when(typeRepo.findAll()).thenReturn(Stream.of(new VehicleType("a",1.0F,1.0F)).collect(Collectors.toList()));
        assertEquals(1,serviceType.find(1).size());

    }


    @Test
    public void addTypeTest(){
        VehicleType type=new VehicleType("a",1.0F,1.0F);
        assertEquals(type,serviceType.addType(type));
    }

}