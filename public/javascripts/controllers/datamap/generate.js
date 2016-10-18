app.controller('generateDatamapController', generateDatamapController);
function generateDatamapController($scope, $rootScope, employeeService, $routeParams){
    $scope.employeeNip = $routeParams.employeeNip;
    $scope.title = "Data Map";
    $scope.employee = [];

    function searchEmployees(){
        employeeService.getEmployeeBySearch("nip=" + $scope.employeeNip).then(function(result){
            $scope.employee = result.data;
        });
    }
    
    searchEmployees();
  }

