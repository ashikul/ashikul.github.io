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

    function controller($http, $scope) {

        var vm = this;
        projects.reverse();
        vm.loadMore = loadMore;
        vm.count = 4;
        vm.projects = [];
        //vm.projects = projects;
        vm.projects.push(projects.pop());
        vm.projects.push(projects.pop());
        vm.projects.push(projects.pop());


        function loadMore() {
            //var last = vm.projects[vm.projects.length - 1];
            //for(var i = 1; i <= 2; i++) {
            //    vm.projects.push(last + i);
            //}


            if(projects.length) {
                vm.projects.push(projects.pop());
                console.log(projects.length);
            } else {
                return;
            }
        };


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
        templateUrl: "main-app/project-list.component.html",
        controllerAs: "vm",
        controller: ["$http", controller]
    });

} ());