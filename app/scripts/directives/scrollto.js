'use strict';

/**
 * @ngdoc directive
 * @name hoqiiApp.directive:scrollTo
 * @description
 * # scrollTo
 */
/* global $:false */
angular.module('hoqiiApp').directive('scrollTo', function () {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			elm.on('click', function() {
				$('body').animate({scrollTop: $(attrs.scrollTo).offset().top - 10}, 'slow');
			});
		}
	};
});
