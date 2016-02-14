A simple album generator. Drop photos into Dropbox and they'll automatically be added
to your site. Perfect for photo albums and moodboards.

(http://album-demo.knownly.net)

# Using the template as-is

1. Download a copy of the repository.
2. Extract into your Knownly website folder in Dropbox.
3. Add your images to ```/assets/images/```. Any photos you drop into this folder will be automatically added to the album website.
4. Replace the banner image ```/assets/banner.jpg``` with your own image.
5. ~~Go to (Knownly)[https://www.knownly.net] and enable directory listings on the ```/assets/images/``` website sub-directory.~~ Contact (community@knownly.net) to activate the ___alpha___ directory listings feature.
6. Take a look.

# Further designing and developing with the template

## Getting up and running

1. Clone the repository
2. Install the dependencies with ```npm i && bower install```
3. Pop your own images into ```src/assets/images/```
4. Run ```gulp serve```

## Publishing your album

1. Adjust the local environment configuration 
   - ```mv ./gulp/conf_local.js.dist ./gulp/conf_local.js```
   - Modify the ```exports.knownly_website_folder``` to point to your knownly website folder in your Dropbox
2. ~~Go to (Knownly)[https://www.knownly.net] and enable directory listings on the ```/assets/images/``` website sub-directory.~~ Contact (community@knownly.net) to activate the ___alpha___ directory listings feature.
3. Run ```gulp build && gulp deploy```

# Contributing

1. Fork and pull the repository
2. Make improvements
3. Submit pull requests

# License

This content of this work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. The underlying source code used to format and display that content is licensed under the MIT License. These are set out in the [license statement](../master/LICENSE.md).

This project is based on the Yeoman [gulp-angular generator](https://github.com/Swiip/generator-gulp-angular) which in turn builds upon a whole bunch amazing open source projects.
