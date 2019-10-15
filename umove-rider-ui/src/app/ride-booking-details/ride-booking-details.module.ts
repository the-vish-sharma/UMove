import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RideBookingDetailsPage } from './ride-booking-details.page';
import { MbscModule } from '@mobiscroll/angular';

const routes: Routes = [
  {
    path: '',
    component: RideBookingDetailsPage
  }
];

@NgModule({
  imports: [
    MbscModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RideBookingDetailsPage]
})
export class RideBookingDetailsPageModule {}
