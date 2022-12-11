import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-form-practice';
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.minLength(2),
        Validators.required,
      ]),
      date: new FormControl(null, Validators.required),
    });
    this.form.get('date')?.valueChanges.subscribe((date) => {
      console.log('subscribe date changes: ', date);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert(
        `name: ${this.form.get('name')?.value} \ndate: ${
          this.form.get('date')?.value?.value
        }`
      );
    } else {
      alert('form not valid');
    }
  }
}
