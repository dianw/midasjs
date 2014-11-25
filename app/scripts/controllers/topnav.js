'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('topNavCtrl', function ($scope, topNavService) {
    topNavService.getMenus().success(function(data) {
    	$scope.menus = data;
    });
  });
