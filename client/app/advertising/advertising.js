'use strict';

angular.module('adCastleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('advertising', {
        url: '/advertising',
        templateUrl: 'app/advertising/advertising.html',
        controller: 'AdvertisingCtrl'
      });
  });