import { Injectable, OnInit } from '@angular/core';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private features: Feature[] = []

  constructor() {
    let savedFeatures = localStorage.getItem("features")

    this.features = savedFeatures ? JSON.parse(savedFeatures) : []
  }

  getFeatures(): Feature[] {
    return this.features
  }

  getFeature(id: string): Feature | undefined {
    return this.features.find(feat => feat.id === id)
  }

  addFeature(feature: Feature) {
    feature.id = Date.now().toString()
    this.features.push(feature)
    localStorage.setItem("features", JSON.stringify(this.features))
  }

  deleteFeature(id: string) {
    let index = this.features.findIndex(feat => feat.id === id)
    this.features.splice(index, 1)
    localStorage.setItem("features", JSON.stringify(this.features))
  }

  updateFeature(id: string, updFeat: Feature) {
    updFeat.id = id
    let index = this.features.findIndex(feat => feat.id === updFeat.id)
    this.features[index] = updFeat
    localStorage.setItem("features", JSON.stringify(this.features))
  }
}
