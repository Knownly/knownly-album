export class AlbumService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'https://www.knownly.net/api/directory-listing/album-demo.knownly.net/assets/images/';
  }

  getPhotos() {
    return this.$http.get(this.apiHost)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getPhotos.\n' + angular.toJson(error.data, true));
      });
  }
}