(function() {
	angular.module('app.components.people')
		.directive('people', peopleDirective);

	function peopleDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/people/people.html',
			scope: {},
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
		vm.people = [];
		console.log(vm.people);
		vm.getPeople = getPeople;

	  	function getPeople() {
		    dataservice.getPeople()
		    	.then(function (data) {
		    		console.log('people');
			        vm.people = data;
			        // return vm.people;
		    	});
		}
	}
})();