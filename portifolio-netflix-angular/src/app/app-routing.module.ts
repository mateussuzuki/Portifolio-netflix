import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FelipeAlvarengaComponent } from './components/profile/felipe-alvarenga/felipe-alvarenga.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';

const routes: Routes = [
  { path: "", redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfileScreenComponent },
  { path: 'profiles/felipeAlvarenga', component: FelipeAlvarengaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
