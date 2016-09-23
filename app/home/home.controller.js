class HomeController {

    constructor($scope, $state) {
        'ngInject';

        this.$state = $state;
    }

    goToPage() {
        this.$state.go('public.page')        
    }
}

export default HomeController;
