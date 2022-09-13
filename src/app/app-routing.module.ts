import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenloginComponent } from './kitchenlogin/kitchenlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreatekitchenComponent } from './createkitchen.component'; 
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  { path: 'createuser', component: CreateuserComponent },
  { path: 'createkitchen', component: CreatekitchenComponent},
  { path: 'kitchenlogin', component: KitchenloginComponent},
  { path: 'userlogin', component: UserloginComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
