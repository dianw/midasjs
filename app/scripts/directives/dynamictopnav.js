'use strict';

/**
 * @ngdoc directive
 * @name hoqiiApp.directive:dynamicTopNav
 * @description
 * # dynamicTopNav
 */
/* global $:false */
angular.module('hoqiiApp')
  .directive('dynamicTopNav', function () {
    return {
      link: function postLink(scope, element) {
          element.find('.dropdown-toggle').dropdown();
          element.find('#buttom-logo').hide();
          $(window).scroll(function(){
            var distanceY = $(window).scrollTop(),
                shrinkOn = 650,
                header = element.find('#scroll-nav');
            if (distanceY > shrinkOn) {
                header.addClass( 'navbar-scroll' );
                element.find('#buttom-logo').show();
                element.find('#buttom-logo').css('height','36px');
                element.find('#top-logo').hide();
            } else {
                element.find('#buttom-logo').hide();
                element.find('#top-logo').show();
                if (header.hasClass( 'navbar-scroll' )) {
                    header.removeClass( 'navbar-scroll' );
                }
            }
        });
      }
    };
  });
