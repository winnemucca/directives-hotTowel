(function() {
	'use strict';

	angular.module('app.components.news')
		.directive('news', newsDirective);

		function newsDirective() {
			return {
				restrict: 'E',
				templateUrl: 'app/components/news/news.html',
				scope: {},
				controller: NewsController,
				controllerAs: 'vm',
				BindToController: true
			};
		}

		function NewsController() {
			var vm = this;

			 vm.news = {
	            title: 'compartments',
	            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        	};

		}
})();