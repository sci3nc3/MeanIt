var module = angular.module('meanitApp', ['ngResource', 'ngRoute','ngMaterial','angularGrid'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', routeProvider])

    .factory('Email', ['$http', emailService])
    .controller('LandingController', ['$scope', 'Email', '$http','$q', landingController])
    .controller('CharityGridController', ['$window','$scope','$http','$q', charityGridController])
    
    .filter('unsafe', function($sce) { return $sce.trustAsHtml; });
