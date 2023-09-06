import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureFormComponent } from './feature-form/feature-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", component: FeatureListComponent},
  {path: "new", component: FeatureFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
