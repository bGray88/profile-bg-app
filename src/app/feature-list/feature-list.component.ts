import { Component, OnInit } from '@angular/core';

import { Feature } from '../models/feature';
import { FeatureService } from '../feature/feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {
  
  features: Feature[] = []

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.features = this.featureService.getFeatures()
  }

  deleteFeature(feature: Feature) {
    this.featureService.deleteFeature(feature.id)
    alert(feature.featureTitle + " Removed")
  }
}
