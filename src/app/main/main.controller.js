export class MainController {
  constructor ($timeout) {
    'ngInject';

    this.classAnimation = '';

    this.activate($timeout);
  }

  activate($timeout) {
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }
}