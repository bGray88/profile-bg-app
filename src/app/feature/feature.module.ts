import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFormComponent } from '../feature-form/feature-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureListComponent } from '../feature-list/feature-list.component';

@NgModule({
  declarations: [
    FeatureFormComponent,
    FeatureListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
