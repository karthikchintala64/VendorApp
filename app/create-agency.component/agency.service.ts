import {Injectable} from 'angular2/core';
import {Agency} from './Agency';
import {Agencies} from './mock-agency';


@Injectable()
/**
 export * AgencyService
 */
export class AgencyService {
    getAgencies(){
        return Agencies;
    }
}
