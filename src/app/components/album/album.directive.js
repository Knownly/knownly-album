export function AlbumDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/album/album.html',
    scope: {
    },
    controller: AlbumController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class AlbumController {
  constructor($log, $timeout, AlbumService, Lightbox) {
    'ngInject';

    var vm = this;
    this.$log = $log
    this.Lightbox = Lightbox;

    vm.openLightboxModal = this.openLightboxModal;

    this.activate(AlbumService);
  }

  activate(album) {
    return this.getPhotos(album);
  }

  getPhotos(album) {
    return album.getPhotos().then((data) => {
      this.photos = data;

      return this.photos;
    });
  }

  openLightboxModal(index) {
    this.Lightbox.openModal(this.photos, index);
  }
}
