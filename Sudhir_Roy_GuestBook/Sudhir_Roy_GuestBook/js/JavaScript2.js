'use strict';
var app = angular.module("myApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "view/dashboard.html"

    })
    .when("/add", {
        templateUrl: "view/add.html",
        controller: 'add'
    }).when("/view", {
        templateUrl: "view/view.html",
        controller: 'view'
      
    }).when("/service", {
        templateUrl: "view/services.html",
        controller: 'service'

    }).when("/help", {
        templateUrl: "view/dashboard.html"
      
         })
    .otherwise({
        templateUrl: "view/dashboard.html",
          controller: 'dashboard'
    });
});


app.controller('main', function ($scope, $location) {

    $scope.logout = function () {
        window.location = "index.html";
    };
});

app.controller('add', function ($scope,$http,$filter,$route,$location) {

    $scope.cancel = function () {
        $location.url('view/dashboard.html');

    };

    $scope.submit = function () {
        //login
        $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
           var request = $http({
            method: "post", url: "php/add.php",
            data: {
                name: $scope.name, email: $scope.email, gender: $scope.gender, address: $scope.address,date:$scope.date, phone: $scope.phone, intime: $scope.intime, contact_person: $scope.contact_person, val: '2'            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            if (data == "0") {
                alert("Succesfully added");
                $location.url('view/dashboard.html');

            }
            else {
                alert(data);
                $location.url('view/dashboard.html');
         
            }
        });
    };
});

app.controller('view', function ($scope, $http,$location) {
        $http.get('php/view.php').then(function (response) {
            // here the data from the api is assigned to a variable named users
            console.log($scope.names = response.data);
            $scope.show = true;
        });
        
    
$scope.back = function () {
    $scope.flag = false;
    $location.url('dashboard.html');

};
});

   app.controller('service', function ($scope,$http,$location) {
    $scope.back = function () {
        $location.url('view/dashboard.html');
    };
   
       $scope.name = ""; $scope.email = ""; $scope.date = ""; $scope.phone = ""; $scope.time = ""; $scope.contact_person = "";$scope.address="";$scope.gender="";
    $scope.selected = {};
    $http.get('php/view.php').then(function (response) {
         // here the data from the api is assigned to a variable named users
         console.log($scope.names = response.data);
         $scope.show = true;
     });
    $scope.getTemplate = function (x) {
        if (x.id === $scope.selected.id) {
            return 'edit';
        }
        else return 'display';
    };
   
    $scope.removeitem = function (x,index) {
            var request = $http({
            method: "post", url: "php/delete.php",
            data: { val: x },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function (data) {
            $scope.names.splice(index, 1);
            alert(data);
        });
    };


    $scope.edit_visitor = function (x) {
   
        $scope.selected = angular.copy(x);
        $scope.id = x.id; $scope.name = x.name; $scope.email = x.email; $scope.gender = x.gender; $scope.date = x.date; $scope.phone = x.phone; $scope.time = x.time; $scope.contact_person = x.contact_person;$scope.address=x.address;

    };
    $scope.reset = function (x) {
        $scope.selected = {};

        x.name = $scope.name; x.email = $scope.email; x.date = $scope.date; x.phone = $scope.phone; x.time = $scope.time; x.address = $scope.address;x.contact_person=$scope.contact_person;
    };
    $scope.update = function (x) {
        var request = $http({
            method: "post", url: "php/update.php",
            data: { id:x.id,name:x.name,email:x.email,gender:x.gender,date:x.date,phone:x.phone,time:x.time,contact_person:x.contact_person,address:x.address},
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function (data) {
            alert(data);
            $scope.selected = {};
        });
    };
});