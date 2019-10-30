import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ZoneService} from "../service/zone/zone.service";
import {Zone} from "../model/zone";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {MapService} from "../service/zone/map.service";
import {RideService} from "../service/ride.service";
import {UserProfile} from "../model/user-profile";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
    ngOnInit(): void {

    }
  containerId = 'pick';
  page = 'pick-up';
  trip : boolean;
  isLoaded : boolean;
  key = 'details';
  verificationCode: string;
  localUserData: UserProfile;
  user: any;
  private selectedZone: Zone;
  locality:string;
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              private geolocation: Geolocation,
              private mapService: MapService,
              private rideService: RideService,
              private storage: Storage) {


  }

  showVehicleList() {

     const ride = this.rideService.currentBooking;
     console.log('pickup zone me ride', ride);
     ride.sourceZone = this.selectedZone;
    if (!this.trip) {
     ride.destinationZones = [];
     ride.destinationZones.push(this.selectedZone);
    }
     this.rideService.setCurrentBooking(ride);

    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedZone
      }
    };
    // this.coordinates = this.zoneService.getCoordinatesByLocality(this.locality);
    this.router.navigate(['bikelist'], navigationExtras);
  }

  gettingCoordinatesByLocality($event: any) {
    this.mapService.gettingCoordinatesByLocality($event);
  }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      this.mapService.buildMap(lat, lng, 'pickup', true);
      // this.mapService.checkMapLoading();
      // this.mapService.marker(lat, lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.mapService.selectZone$.subscribe(zone => {
      console.log('selected zone', zone);
      this.selectedZone = zone;
    });
    this.mapService.onLoad$.subscribe((message: string) => {
      console.log('lo ho gya load ab tofinally~~~');
      this.isLoaded = true;
    });

    this.storage.ready().then(() => {
      this.storage.get(this.key).then(value => {
        console.log('this is in storage', value);
        this.localUserData = value;
      });
    });
  }
}
