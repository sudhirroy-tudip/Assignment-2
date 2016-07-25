'use strict';
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.
    when("/signup", {
        templateUrl: "view/signup.html",
        controller:'signup',
  access: {
    isFree: true
  }
    }).when("/forgot", {
        templateUrl: "view/forgot.html",
        controller: 'forgot'
    }).otherwise({
        templateUrl: "view/login.html",
        controller:'login'

    })
    
});

app.controller('forgot', function ($scope, $http, $location) {
    $scope.cancel = function () {
        $location.url('view/login.html');
   };
    $scope.submit = function () {
        //login
        var request = $http({method: "post",url: "php/forgot.php",
            data: {
                email: $scope.email
                  },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            if (data) {
                alert('your password is '+data);
			     $location.url('view/login.html');
            }
            else {
                alert("Email not matched with us...try to remember or take permission");
     		     $location.url('view/forgot.html');
     
            }
        });
    };
});
app.controller('login',function ($scope, $http, $location) {
    //for displaying login and signup
        //login
           $scope.submit=function(){
		   	var request = $http({method: "post",url: "php/login.php",
            data: {
                email: $scope.email,
                pass: $scope.password,
                  },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
             if (data=="0") 
            window.location = "main.html";
     else
            alert('Wrong credential,try again');
        });
        };
});
app.controller('signup', function ($scope, $http, $location) {
    $scope.cancel = function () {
        $location.url('view/login.html');
   };
      
        $scope.submit = function () {
          var request = $http({
            method: "post", url: "php/signup.php",
            data: {
                email: $scope.email,
                pass: $scope.password,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            if (data == "0") {
                alert("succesfully registered");
                $location.url('view/login.html');

            }
            else {
                alert("Not valid");
            }
        });
    };
});
   