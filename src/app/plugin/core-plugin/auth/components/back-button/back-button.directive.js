class AuthBackButtonDirective {
  constructor() {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: 'app/plugin/core-plugin/auth/components/back-button/back-button.html',
      controller: AuthBackButtonController,
      controllerAs: 'authBackButtonController',
      scope: {
        routeDestination: '@',
        label: '@'
      }
    };
    return directive;
  }
}

class AuthBackButtonController {
  constructor($rootScope, $scope, $state, authService) {
    'ngInject';
    this.$scope = $scope;
    this.$state = $state;
    
    this.routeDestination = this.$scope.routeDestination;
    this.label = this.$scope.label;
    
  }
  
  goBack(){
    console.log(this.routeDestination);
    this.$state.go(this.routeDestination);
  }

}

export default AuthBackButtonDirective;