import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
      {
          title: 'Home',
          url: '/',
          icon: 'home'
      },
      {
          title: 'My Rides',
          url: '/my-rides',
      },
    {
      title: 'Payment Method',
      url: '/show-payment-method'
    },
    {
      title: 'View profile',
      url: '/view-profile',
    },
      {
          title: 'Update KYC',
          url: '/update-kyc',
      },
      {
          title: 'Offers',
          url: '/campaigns',
      }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}