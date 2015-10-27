'use strict';

describe('Controller: MembershipCtrl', function () {

  // load the controller's module
  beforeEach(module('adCastleApp'));

  var MembershipCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipCtrl = $controller('MembershipCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
