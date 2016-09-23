class PageController {
    
    constructor($scope, $state, $stateParams, GeolocatorService, ) {
        'ngInject';

        this.$state = $state;
        this.GeolocatorService = GeolocatorService;
        this.location = '';
        this.street = '';
        this.housenumber = '';
        this.postalcode = '';
        this.city = '';
    }

    locate() {
        let address = this.createAddressObject(this.street, this.housenumber, this.postalcode, this.city);
        var self = this;
        this.location = this.GeolocatorService.locate(address).get({}, function(resp) {
            console.log(resp)
            if (resp.status === 'OK') {
                self.location = resp.results[0].geometry.location;
                // succeed();
            }

            else if (resp.status === 'ZERO_RESULTS') {
                self.location = 'ZERO_RESULTS';
                // failed();
            }

            else if (resp.status === 'REQUEST_DENIED') {
                self.location = 'REQUEST_DENIED';
            }

            else if (resp.status === 'INVALID_REQUEST') {
                self.location = 'INVALID_REQUEST';
            }
        });
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