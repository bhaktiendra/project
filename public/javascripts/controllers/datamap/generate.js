app.controller('generateDatamapController', generateDatamapController);
function generateDatamapController($scope, $routeParam){
    $scope.title = "Data Map";
    $scope.employeeId = $routeParam.employeeId;
    
}

