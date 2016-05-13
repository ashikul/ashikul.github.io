(function() {
    "use strict";

    /*  var module = angular.module("main-app", ["ngRoute"]);

     module.config(function($routeProvider) {

     $routeProvider
     .when("/list", { template: "<movie-list></movie-list>"})
     .otherwise({ redirectTo: "/list"});

     });
     */

    var module = angular.module("main-app", ['infinite-scroll']);
    //module.value("$routerRootComponent", "movieApp");

}());