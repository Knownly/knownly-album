/* global moment:false, _:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { AlbumDirective } from '../app/components/album/album.directive';
import { AlbumService } from '../app/components/album/album.service';

angular.module('knownly-demo-album', ['bootstrapLightbox', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'wu.masonry'])
  .constant('moment', moment)
  .constant('_', _)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
  .directive('album', AlbumDirective)
  .service('AlbumService', AlbumService)
