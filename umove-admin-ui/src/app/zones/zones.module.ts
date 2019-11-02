import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatPaginatorModule,
   MatSelectModule, MatOptionModule, MatDialogModule, MatToolbarModule, MatGridListModule, MatSnackBarModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatListModule} from '@angular/material';
import { ZoneCardComponent } from './zone-card/zone-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { UpdateZonesComponent } from './update-zones/update-zones.component';
import { AddSupervisorComponent } from './add-supervisor/add-supervisor.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
import { AvatarModule } from 'ngx-avatar';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ZonesComponent, ZoneCardComponent, ZoneDetailsComponent, AddZoneComponent, UpdateZonesComponent,
     AddSupervisorComponent, SupervisorDetailsComponent, VehicleDetailsComponent, AddVehicleComponent, ],
  imports: [
    CommonModule,
    ZonesRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatChipsModule,
    AvatarModule,
    MatListModule,
    NgxSpinnerModule
  ],
  entryComponents: [AddZoneComponent, UpdateZonesComponent, AddSupervisorComponent, AddVehicleComponent]
})
export class ZonesModule { }
