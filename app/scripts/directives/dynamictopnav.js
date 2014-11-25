'use strict';

/**
 * @ngdoc directive
 * @name hoqiiApp.directive:dynamicTopNav
 * @description
 * # dynamicTopNav
 */
/* global $:false */
angular.module('hoqiiApp')
  .directive('dynamicTopNav', function ($window) {
    return {
      link: function postLink(scope, element) {
          element.find('.dropdown-toggle').dropdown();
          element.find('#buttom-logo').hide();
          $(window).scroll(function(){
            var distanceY = $(window).scrollTop(),
                shrinkOn = $window.innerHeight - 50;
            if (distanceY > shrinkOn) {
                element.addClass( 'navbar-scroll' );
                element.find('#buttom-logo').show();
                element.find('#buttom-logo').css('height','36px');
                element.find('#top-logo').hide();
            } else {
                element.find('#buttom-logo').hide();
                element.find('#top-logo').show();
                if (element.hasClass( 'navbar-scroll' )) {
                    element.removeClass( 'navbar-scroll' );
                }
            }
        });
      }
    };
  });
