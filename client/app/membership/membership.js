'use strict';

angular.module('adCastleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('membership', {
        url: '/membership',
        templateUrl: 'app/membership/membership.html',
        controller: 'MembershipCtrl'
      });
  });