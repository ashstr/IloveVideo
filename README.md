# IloveVideo Website   

<br>
this is my personal solution for ilovevideo task for javascript develper.
i used in this solution some of boilerplate snippets to speed up the process .. ho
<br>
### What's in the box
<br>
<p align="center" >
  <a href="http://gulpjs.com/" target="_blank" alt="gulp" title="gulp">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9409728/c5332474-481c-11e5-9a6e-74641a0f1782.png">
  </a>
   <a href="https://nodejs.org/" target="_blank" alt="nodejs" title="nodejs">
    <img height="100" src="https://www.netgains.org/wp-content/uploads/2014/01/node_js.png">
  </a>
  <a href="http://bower.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041250/ef9a78b8-ac7a-11e4-9586-7e7e894e201e.png">
  </a>
  <a href="https://www.browsersync.io/" target="_blank" alt="browsersync" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/16412038/77028548-3d2a-11e6-88d0-2c0d66582f4c.png">
  </a>
  <a href="https://angularjs.org/" target="_blank" alt="angularjs" title="angular">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041199/5978cb96-ac7a-11e4-9568-829e2ea4312f.png">
  </a>
  <a href="https://github.com/hapijs/joi" target="_blank" alt="joi" title="joi">
    <img height="100" src="https://camo.githubusercontent.com/9c20f86ee4df5f043a36e0bfc1ff6f5bc40e8401/68747470733a2f2f7261772e6769746875622e636f6d2f686170696a732f6a6f692f6d61737465722f696d616765732f6a6f692e706e67">
  </a>
  <br>
  <br>
  <a href="http://sass-lang.com/" target="_blank" alt="sass" title="sass">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410121/c330a3de-481e-11e5-8a69-ca0c56f6cabc.png">
  </a>
  <a href="http://eslint.org/" target="_blank" alt="eslint" title="eslint">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/15893052/ada5651e-2d7d-11e6-9246-dc749c7afd63.png">
  </a>
  <a href="http://karma-runner.github.io/" target="_blank" alt="karma" title="karma">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410216/44fef8fc-481f-11e5-8037-2f7f03678f4c.png">
  </a>
   <a href="https://mochajs.org/" target="_blank" alt="mocha" title="mocha">
    <img height="100" src="https://cldup.com/xFVFxOioAU.svg">
  </a>
  <a href="https://shouldjs.github.io/" target="_blank" alt="shouldJS" title="shouldJS">
    <img height="100" src="https://avatars2.githubusercontent.com/u/7722513?v=3&s=200">
  </a>
    <a href="http://videojs.com/" target="_blank" alt="shouldJS" title="shouldJS">
    <img height="100" src="https://avatars3.githubusercontent.com/u/3287189?v=3&s=200">
  </a>

 
</p>
<br>
<br>
# Why .... Why not this packages
- videoJs its verry extisive lib provide html5 video players with fallback for flash media and it also provide responisive video players with rich APIs

- ExpressJs to provide server routing

- MDBootstrao to provide material design and responsive layout


# Installation and Prerequisites


## Node and dependencies
-  **[Nodejs & npm](https://nodejs.org/)** - install via their website
-  **[Gulp](http://gulpjs.com/)** and **[Bower](http://bower.io/)** - install via npm

```
npm install --global gulp
npm install --global bower
```

# Start Development

### Top-level directory layout

    .    
    ├── src                     
    │   ├── client          # holds client app files and tests
    │   |   ├── app         # holds web application files 
    │   ├── server          # holds servers files and DB conf
    │   └── serverTests     # holds server tests by mocha        
    ├── gulpconfig.js
    ├── gulpconfig.js
    └── README.md

## Generating ilovevideo Website
1. **Go to project directory** - and cd into it.

1. **run npm and bower**

  ```
  npm install
  bower install
  ```
1. ** add the following part to MDBootstrap bower folder at bower.json and .bower.json **
```
'main': [    
    'js/mdb.min.js' ,
    './fonts/*' 
  ]
```

## Running in the browser
```
gulp serve
```
Prepares everything for development and opens your default browser:

When you run `gulp sserve` it does this to your `index.html`:
- inject all bower javascript and css files (Angular,...)
- inject all of your app files (compiled css, angular files, ...)

`gulp serve` also livereloads the application when changing/adding/deleting files to immediately show the changes you make in your browser.

## Run Client / App test 

` gulp test `

## Run Server tests 

` gulp mocha `

