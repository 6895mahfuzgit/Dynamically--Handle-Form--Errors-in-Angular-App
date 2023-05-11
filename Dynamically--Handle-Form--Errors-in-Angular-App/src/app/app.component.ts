import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamically--Handle-Form--Errors-in-Angular-App';

  constructor(private fb: FormBuilder) {

  }

  form = this.fb.group({
    name1: ['', [Validators.required, Validators.minLength(2)]],
    name2: ['', [Validators.required, Validators.minLength(3)]],
  });

}
