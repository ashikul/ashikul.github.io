(function() {
    "use strict";

    var module = angular.module("main-app");

    function fetchProjects($http) {
        return $http.get("/projects.json")
                    .then(function(response) {
                        return response.data;
                    });
    }

    function controller($http) {

        var vm = this;
        vm.projects = [];

        vm.$onInit = function() {
            fetchProjects($http).then(function(projects) {
                vm.projects = projects;
            });
        };

        //vm.goTo = function(id) {
        //    vm.$router.navigate(["Details", {id:id}, "Overview"]);
        //};
    }

    module.component("projectList", {
        //bindings: {
        //    "$router": "<"
        //},
        templateUrl: "/main-app/project-list.component.html",
        controllerAs: "vm",
        controller: ["$http", controller]
    });

} ());