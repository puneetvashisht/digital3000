var app = angular.module('poll', ['ngRoute']);
		app.controller('PollCtrl', function($scope, $http){
			console.log("in pollCtrl page");
			$scope.polls = []
			
			$scope.loadPolls = function(){
				$http({
					method: 'get',
					url: '/getPolls'
				}).success(function(data, status){
					console.log(data)
					$scope.polls = data;
				}).error(function(){
					console.log("Some error occurred on server, please try later")
				})
			}
			
			
			$scope.showPoll = function(poll){
				console.log(poll)
			}
		});
		
		
		app.config(function($routeProvider){
			$routeProvider.when("/polls", {
				templateUrl: './templates/polls.html',
				controller: 'PollCtrl'
			}).when("/new", {
				templateUrl: "./templates/newPoll.html",
				controller: "PollCtrl"
			}).when("/poll", {
				templateUrl: "./templates/poll.html",
				controller: "PollCtrl"
			}).otherwise({
				redirectTo: '/polls'
			})
		})