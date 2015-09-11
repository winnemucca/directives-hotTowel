(function () {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
       
        vm.messageCount = 0;
        vm.title = 'Dashboard';

        activate();
        console.log(DashboardController);
        function activate() {
            var promises = [getMessageCount()];
            console.log(vm);
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

      
    }
})();
