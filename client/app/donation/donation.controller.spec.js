'use strict';

describe('Controller: DonationCtrl', function () {

  // load the controller's module
  beforeEach(module('adCastleApp'));

  var DonationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonationCtrl = $controller('DonationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
