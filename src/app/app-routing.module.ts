import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
		canActivate: [ ValidarTokenGuard ],
		canLoad: [ ValidarTokenGuard ]
	},
	{
		path: '**',
		redirectTo: 'auth'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	//useHash: true //si se realiza esto no se requiere configuración en el backeng
	useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
