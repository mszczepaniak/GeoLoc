class PageController {
    
    constructor($scope, $state, $stateParams, GeolocatorService, toaster, $window) {
        'ngInject';

        this.$state = $state;
        this.GeolocatorService = GeolocatorService;
        this.street = '';
        this.housenumber = '';
        this.postalcode = '';
        this.city = '';
        this.toaster = toaster;
    }

    locate() {
        let address = this.createAddressObject(this.street, this.housenumber, this.postalcode, this.city);
        var self = this;
        this.location = this.GeolocatorService.locate(address).get({}, function(resp) {
            if (resp.status === 'OK') {
                self.popSuccess(resp.results[0].geometry.location.lng,resp.results[0].geometry.location.lat);
            }

            else if (resp.status === 'ZERO_RESULTS') {
                self.popError("Keine Ergebnisse");
            }

            else if (resp.status === 'REQUEST_DENIED') {
                self.popError("Abfrage verboten");
            }

            else if (resp.status === 'INVALID_REQUEST') {
                self.popError("Ungueltige Abfrage");
            }
        });
    }

    popSuccess(long, lat) {
        let message = "lat: " + lat + " long: " + long;
        this.toaster.success({title: "Erfolgreich! GPS Coordinates:", body: message});
    }

    popError(message) {
        this.toaster.error({title: "Etwas ist schief gegangen", body: message});
    }

    createAddressObject(street, housenumber, postalcode, city) {
        return {
            street: street,
            housenumber: housenumber,
            postalcode: postalcode,
            city: city
        }
    }

    goBack() {
        this.$state.go('public.home');
    }
}

export default PageController;