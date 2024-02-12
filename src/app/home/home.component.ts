import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpMethodsService } from 'src/app/http-methods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  appForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpMethodsService
  ) {}

  ngOnInit(): void {
    this.appForm = this.formBuilder.group({
      num1: ['', [Validators.required]],
      num2: ['', [Validators.required]],
      num3: [''],
    });
  }

  add() {
    if (this.appForm.valid) {
      this.httpService
        .calculate(this.appForm.value, 'add')
        .subscribe((response) => {
          this.appForm.num3 = response;
          this.appForm.controls['num3'].setValue(this.appForm.num3.num3);
        });
    } else {
      alert('Form is not valid !');
    }
  }
  subtract() {
    if (this.appForm.valid) {
      this.httpService
        .calculate(this.appForm.value, 'subtract')
        .subscribe((response) => {
          this.appForm.num3 = response;
          this.appForm.controls['num3'].setValue(this.appForm.num3.num3);
        });
    } else {
      alert('Form is not valid !');
    }
  }
  multiply() {
    if (this.appForm.valid) {
      this.httpService
        .calculate(this.appForm.value, 'multiply')
        .subscribe((response) => {
          this.appForm.num3 = response;
          this.appForm.controls['num3'].setValue(this.appForm.num3.num3);
        });
    } else {
      alert('Form is not valid !');
    }
  }
  divide() {
    if (this.appForm.valid) {
      this.httpService
        .calculate(this.appForm.value, 'divide')
        .subscribe((response) => {
          this.appForm.num3 = response;
          this.appForm.controls['num3'].setValue(this.appForm.num3.num3);
        });
    } else {
      alert('Form is not valid !');
    }
  }
}
