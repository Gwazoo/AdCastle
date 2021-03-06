'use strict';

angular.module('adCastleApp')
  .controller('NavbarCtrl', function ($scope, $location, $cookieStore, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'About',
      'link': '/about'
    }, {
      'title': 'Membership',
      'link': '/membership'
    }, {
      'title': 'Advertising',
      'link': '/advertising'
    }, {
      'title': 'Donation',
      'link': '/donation'
    }];

    $scope.closeAlert = function() {
      $cookieStore.put('alertClosed', true);
      $scope.alertClosed = true;
    };

    $scope.alertClosed = $cookieStore.get('alertClosed');
    console.log($cookieStore.get('alertClosed'));

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });