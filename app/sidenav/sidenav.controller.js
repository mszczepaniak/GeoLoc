class SidenavController {
    /**
     * Constructor class SidenavController
     *
     * @param {object} $scope
     */
    constructor($scope, $state) {
        'ngInject';

        this.$state = $state;
        var vm = this;
    }

}

export default SidenavController;
