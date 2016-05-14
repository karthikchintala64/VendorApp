import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from '../../app/dashboard.component/dashboard.component';
import {HomeComponent} from '../../app/home.component/home.component';
import {CreateMemberComponent } from '../../app/create-member.component/create-member.component';
import {CreateAgencyComponent } from '../../app/create-agency.component/create-agency.component';
import {VolunteerFormComponent} from '../../app/create-volunteerform.component/create-volunteerform.component';
import {ModelDrivenForm} from '../../app/create-receiptent.component/create-receiptent.component';

@Component({
    selector: 'my-app',
    styleUrls:['app/app.component/app.component.css'],
    templateUrl:'app/app.component/app.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})
@RouteConfig([{
    path:'/home',
    name:'Home',
    component:HomeComponent,
    useAsDefault: true
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/createmember',
    name: 'CreateMemberComponent',
    component: CreateMemberComponent
  },
  {
    path: '/createagency',
    name: 'CreateAgencyComponent',
    component: CreateAgencyComponent
  },
  {
    path: '/volunteerform',
    name: 'VolunteerFormComponent',
    component: VolunteerFormComponent  
  },{
    path: '/receiptentform',
    name: 'ModelDrivenForm',
    component: ModelDrivenForm  
  }])
  
export class AppComponent { 
    
}
