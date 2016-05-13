(function() {
    "use strict";

    var module = angular.module("main-app");

    //function fetchProjects($http) {
    //    return $http.get('projects.json')
    //                .then(function(response) {
    //                    console.log(response);
    //                    return response.data;
    //                });
    //}

    function controller($http) {

        var vm = this;
        vm.projects = projects;

        //vm.$onInit = function() {
        //    fetchProjects($http).then(function(projects) {
        //        console.log("yes controller called!");
        //        vm.projects = projects;
        //    });
        //};

        //vm.goTo = function(id) {
        //    vm.$router.navigate(["Details", {id:id}, "Overview"]);
        //};
    }

    module.component("projectList", {
        //bindings: {
        //    "$router": "<"
        //},
        templateUrl: "main-app/project-list.component.html",
        controllerAs: "vm",
        controller: ["$http", controller]
    });

} ());