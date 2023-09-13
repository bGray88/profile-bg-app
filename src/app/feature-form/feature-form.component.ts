import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

import { Feature } from '../models/feature';
import { FeatureService } from '../feature/feature.service';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css']
})
export class FeatureFormComponent implements OnInit {
  featureForm: FormGroup = new FormGroup({})
  featImagePattern       = "(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"

  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private featureRouter: Router,
    private featureActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      featureTitle:       ['', Validators.required],
      featureDescription: ['', Validators.required],
      featureDate:        ['', Validators.required],
      featureImage:       ['', [Validators.required, Validators.pattern(this.featImagePattern)]]
    })

    let id = this.featureActivatedRoute.snapshot.paramMap.get('id')

    if (id) {
      let feature = this.featureService.getFeature(id)
      if (feature) {
        this.featureForm.patchValue(feature)
      }
    }
  }

  onSubmit() {
    if (this.featureForm.valid) {
      console.log("Valid");

      let feature: Feature = this.featureForm.value
      let id = this.featureActivatedRoute.snapshot.paramMap.get('id')

      if (id) {
        this.featureService.updateFeature(id, feature)
        this.featureRouter.navigate(['/list'])
        alert(feature.featureTitle + " Updated")
      } else {
        this.featureService.addFeature(feature)
        this.featureRouter.navigate(['/list'])
        alert(feature.featureTitle + " Added")
      }
    } else {
      console.log("Invalid");
    }
  }
}
