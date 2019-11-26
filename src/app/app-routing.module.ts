// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// user component
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// auth Guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
     component: LoginComponent
    },

  {
    path: 'events' ,
    component: EventsComponent
  },

  {
    path: 'special' ,
     component: SpecialEventsComponent,
     canActivate: [AuthGuard]
    },
    {
      path: 'profile',
      component: UserprofileComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '**',
      component: PagenotfoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
   RegisterComponent , LoginComponent , EventsComponent , SpecialEventsComponent ,
   UserprofileComponent, PagenotfoundComponent];
