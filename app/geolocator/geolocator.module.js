import GeolocatorService from './geolocator.service';
import ngResource from 'angular-resource';

let geolocatorModule = angular.module('geoloc.geolocator', [ngResource]);

geolocatorModule.service('GeolocatorService', GeolocatorService);

export default geolocatorModule = geolocatorModule.name;
