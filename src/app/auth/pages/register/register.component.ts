import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

	miFormulario = this.fb.group({
		nombre: [ '', [Validators.required, Validators.minLength(6) ] ],
		email: [ '', [ Validators.required, Validators.email ] ],
		password: [ '', [Validators.required, Validators.minLength(6) ] ]
	});

	constructor(
		private fb: FormBuilder,
		private router: Router
	) { }

	registro() {
		console.log( this.miFormulario.value );

		this.router.navigateByUrl('/dashboard');
	}

}
