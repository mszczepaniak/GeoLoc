class GeolocatorService {

    constructor($resource)  {
        'ngInject';
        this.$resource = $resource;
        this.locate = this.locate;
        this.API = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.KEY = "AIzaSyCFESwvpOmKFT76yuDi7Gg6CquNhTGqt7A";
    }

    locate(address) {
        let ENDPOINT = this.API + address.street + "+" + address.houseNumber + ",+" + address.city + "&key=" + this.KEY;
        let ngResource = this.$resource(ENDPOINT);
        return ngResource;
    }
}

export default GeolocatorService;