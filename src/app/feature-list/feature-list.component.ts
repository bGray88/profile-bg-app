import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Feature } from '../models/feature';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {
  newFeatureTitle       = ""
  newFeatureDescription = ""
  newFeatureDate        = new Date()
  newFeatureImage       = ""

  features: Feature[] = []

  ngOnInit() {
    let savedFeatures = localStorage.getItem("features")

    this.features = savedFeatures ? JSON.parse(savedFeatures) : []
  }

  addFeature() {
    if (this.newFeatureTitle.trim().length && this.newFeatureDate){
      let newFeature: Feature = {
        id: Date.now(),
        title: this.newFeatureTitle,
        description: this.newFeatureDescription,
        date: this.newFeatureDate,
        image: this.newFeatureImage
      }
      this.features.push(newFeature)

      alert(this.newFeatureTitle + " Added")

      this.newFeatureTitle = ""
      this.newFeatureDate  = new Date()

      localStorage.setItem('features', JSON.stringify(this.features))
    }
  }

  deleteFeature(index: number) {
    let delFeature = this.features.splice(index, 1)

    alert(delFeature[0].title + " Removed")

    localStorage.setItem('features', JSON.stringify(this.features))
  }
}
