class HomeController {

    constructor($scope, $state) {
        'ngInject';

        this.$state = $state;
    }

    goToPage(Id) {
        this.$state.go('public.page')        
    }
}

export default HomeController;
