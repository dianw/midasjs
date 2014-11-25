'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * Controller of the hoqiiApp
 */
 /* global $:false */
angular.module('hoqiiApp').controller('topNavCtrl', function ($scope, topNavService, $location) {
	$scope.$on('$routeChangeStart', function() { 
		if($location.path() !== '/') {
			var element = $('[dynamic-top-nav]');
			element.addClass( 'navbar-scroll' );
            element.find('#buttom-logo').show();
            element.find('#buttom-logo').css('height','36px');
            element.find('#top-logo').hide();
		}
 	});

    topNavService.getMenus().success(function(data) {
    	$scope.menus = data;
    });
});
