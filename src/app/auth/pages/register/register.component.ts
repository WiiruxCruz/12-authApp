import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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
		private router: Router,
		private authService: AuthService
	) { }

	registro() {
		console.log( this.miFormulario.value );

		const { nombre, email, password } = this.miFormulario.value;

		this.authService.registro( nombre, email, password )
		.subscribe(
			ok => {
				console.log(ok);
				if( ok === true ) {
					this.router.navigateByUrl('/dashboard');
				} else {
					Swal.fire('Error', ok, 'error');
				}
			}
		)
		;
	}

}
