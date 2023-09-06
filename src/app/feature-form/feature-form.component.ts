import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css']
})
export class FeatureFormComponent implements OnInit {
  featureForm: FormGroup = new FormGroup({})
  featImagePattern       = "(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      featureTitle:       ['', Validators.required],
      featureDescription: ['', Validators.required],
      featureDate:        ['', Validators.required],
      featureImage:       ['', [Validators.required, Validators.pattern(this.featImagePattern)]]
    })
  }

  onSubmit() {
    if (this.featureForm.valid) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
  }
}
