import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRouting } from './reservation-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ReservationComponent

  ],
  imports: [
    
    CommonModule,
    ReservationRouting,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class ReservationModule { }