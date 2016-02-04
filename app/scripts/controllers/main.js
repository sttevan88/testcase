'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $rootScope) {

  	$scope.users = [{
  		id: 1,
  		name: "John Smith",
  		email: "johnsmith@email.com",
  		img: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzOTc0MTk1NzI0.jpg"
  	}, {
  		id: 1,
  		name: "Joana Park",
  		email: "joanapark@email.com",
  		img: "https://www.studioline.de/imagetypes/slidermisch/kiel_citti-park_traeubel_joana_09_2015.jpg"
  	}, {
  		id: 1,
  		name: "Mike Jones",
  		email: "mikejones@email.com",
  		img: "http://static.djbooth.net/pics-features/mikejones.jpg"
  	}]

  	$rootScope.user = {
  		id: 1,
  		name: "John Smith",
  		email: "johnsmith@email.com",
  		img: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzOTc0MTk1NzI0.jpg"
  	};

  	$scope.orders = [{
  		id : 1, 
  		name : "iPad 2", 
  		weight: 22, 
  		destination : "Hamburg", 
  		creation_date: "1289323623006", 
  		client_id: 2
  	}, {
  		id : 2, 
  		name : "Employee", 
  		weight: 90, 
  		destination : "Berlin", 
  		creation_date: "1287323723006", 
  		client_id: 2
  	}, {
  		id : 3, 
  		name : "Fridge", 
  		weight: 111, 
  		destination : "Dubai", 
  		creation_date: "1284323823006", 
  		client_id: 1
  	}, {
  		id : 4, 
  		name : "Mini oven", 
  		weight: 33, 
  		destination : "New York", 
  		creation_date: "1283323963006", 
  		client_id: 3
  	}]


  });
