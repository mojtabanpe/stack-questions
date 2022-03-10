import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgDropdownComponent } from 'src/app/components/ng-dropdown/ng-dropdown.component';


@NgModule({
  declarations: [
    HomeComponent,
    NgDropdownComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgChartsModule,

  ]
})
export class HomeModule { }
