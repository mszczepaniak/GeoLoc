import PageConfig from './page.config';
import PageController from './page.controller';
import angularAnimate from 'angular-animate';
import toaster from 'angularjs-toaster';

require('./page.scss');

let pageModule = angular.module('geoloc.page', [angularAnimate, toaster]);

pageModule.config(PageConfig);
pageModule.controller('PageController', PageController);

export default pageModule = pageModule.name
