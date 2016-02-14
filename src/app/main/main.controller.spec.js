describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('knownly-demo-album'));

  beforeEach(inject(($controller) => {

    vm = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm.creationDate).toEqual(jasmine.any(Number));
  });

  it('should define animate class after delaying timeout', inject($timeout => {
    $timeout.flush();
    expect(vm.classAnimation).toEqual('rubberBand');
  }));

});
