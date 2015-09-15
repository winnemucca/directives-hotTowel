(function() {
	angular.module('app.components.people')
		.directive('people', peopleDirective);

	function peopleDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/people/people.html',
			scope: {
				people: '='
			},
			controller: PeopleController,
			controllerAs: 'vm',
			// anything that we pass to isolated scope will be bound to vm
			bindToController: true
		};
	}
	// for the linter sees as a Constructor
	PeopleController.$inject = ['dataservice'];
	function PeopleController(dataservice) {
		var vm = this;
		
	}
})();