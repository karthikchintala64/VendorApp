import {Component,OnInit} from 'angular2/core';
import  {Agency} from './Agency';
import  {AgencyService} from './agency.service.ts';


@Component({
    selector:'create-agency',
    styleUrls:['app/create-agency.component/create-agency.component.css'],
    templateUrl:'app/create-agency.component/create-agency.component.html',
    providers:[AgencyService]
})
export class CreateAgencyComponent implements OnInit{
    constructor(private _service:AgencyService){}
    public agencies:Agency[];
    getAgencies(){
             this.agencies= this._service.getAgencies();
    }
    ngOnInit():any{
        this.getAgencies();
    }
}