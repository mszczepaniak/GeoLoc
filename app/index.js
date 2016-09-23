import 'angular';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import home from './home/home.module';
import geolocator from './geolocator/geolocator.module';
import page from './page/page.module';
import sidenav from './sidenav/sidenav.module';

// Project specific style
import './scss/bootstrap.scss'

export const geolocModule = angular.module('geoloc', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    ngResource,
    geolocator,
    home,
    page,
    sidenav
]);

geolocModule.config(($stateProvider) => {
    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

geolocModule.controller('MainController', function($mdSidenav, $state) {

    'ngInject';

    this.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    this.closeSidenav = () => {
        $mdSidenav('left').close();
    };

    this.goToPage = () => {
        $state.go('public.page');
    };
});
