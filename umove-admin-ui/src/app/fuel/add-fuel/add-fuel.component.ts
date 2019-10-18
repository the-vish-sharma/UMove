import { Component, OnInit } from '@angular/core';
import { FuelService } from '../fuel.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-fuel',
  templateUrl: './add-fuel.component.html',
  styleUrls: ['./add-fuel.component.css']
})
export class AddFuelComponent implements OnInit {
  datas = [];
  message: string;

  get rName() {
    return this.fuelForm.get('name');
  }

  get rCost() {
    return this.fuelForm.get('costFuel');
  }

  constructor( public dialogRef: MatDialogRef<AddFuelComponent>, private fb: FormBuilder, private route: ActivatedRoute,
               private router: Router, private fuelService: FuelService,
               private snackBar: MatSnackBar) { }

               fuelForm = this.fb.group({
                name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
                costFuel: ['']
              });

              onSubmit() {

                console.log(this.fuelForm.value);
                console.log(this.fuelForm.value, 'child');
                this.dialogRef.close(this.fuelForm.value);


            }

            onClose() {
              this.fuelForm.reset();
              this.dialogRef.close();
            }


  openSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }


  ngOnInit() {
  }

}
