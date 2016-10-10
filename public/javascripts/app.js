var app = angular.module('employeeApp', [
  'ngRoute',
  'ngResource'
]).run(Runconfig);

function Runconfig($rootScope, $http){
  // TODO : Setup Authentication
}

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/employee/list-employee.html',
      controller: 'listEmployeeController'
    })
    .when('/employee', {
      templateUrl: '/views/employee/list-employee.html',
      controller: 'listEmployeeController'
    })
    .when('/new-employee', {
      templateUrl: '/views/employee/new-employee.html',
      controller: 'createEmployeeController'
    })
    .when('/employee/:employeeId', {
      templateUrl: '/views/employee/edit-employee.html',
      controller: 'editEmployeeController'
    })
    .when('/search/:searchArgs', {
      templateUrl: '/views/employee/search-employee.html',
      controller: 'searchEmployeeController'
    })
    .when('/datamap', {
      templateUrl: '/views/datamap/main-datamap.html',
      controller: 'generateDatamapController'
    })
});
