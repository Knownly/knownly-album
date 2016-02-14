export function config ($logProvider, LightboxProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  LightboxProvider.getImageUrl = function (image) {
    return image.path_lower;
  };

}
