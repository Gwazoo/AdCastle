'use strict';

angular.module('adCastleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('donation', {
        url: '/donation',
        templateUrl: 'app/donation/donation.html',
        controller: 'DonationCtrl'
      });
  });