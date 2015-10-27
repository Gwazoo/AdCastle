'use strict';

describe('Controller: AdvertisingCtrl', function () {

  // load the controller's module
  beforeEach(module('adCastleApp'));

  var AdvertisingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdvertisingCtrl = $controller('AdvertisingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
