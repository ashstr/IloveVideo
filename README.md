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
  <a href="http://bower.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041250/ef9a78b8-ac7a-11e4-9586-7e7e894e201e.png">
  </a>
  <a href="https://www.browsersync.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/16412038/77028548-3d2a-11e6-88d0-2c0d66582f4c.png">
  </a>
  <a href="https://angularjs.org/" target="_blank" alt="angular" title="angular">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041199/5978cb96-ac7a-11e4-9568-829e2ea4312f.png">
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
  <a href="http://jasmine.github.io/" target="_blank" alt="jasmine" title="jasmine">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410153/ebd46a00-481e-11e5-9864-f00fa8427d17.png">
  </a>
</p>
<br>
<br>

# Installation and Prerequisites


## Node and dependencies
-  **[Nodejs & npm](https://nodejs.org/)** - install via their website
-  **[Gulp](http://gulpjs.com/)** and **[Bower](http://bower.io/)** - install via npm

```
npm install --global gulp
npm install --global bower
```

# Start Development

## Generating ilovevideo Website
1. **Go to devProj directory** - and cd into it.

  ```sh
  cd devProj
  ```

1. **run npm and bower**

  ```
  npm install
  bower install
  ```
  and follow the instructions


## Running in the browser
```
gulp serve
```
Prepares everything for development and opens your default browser:

When you run `gulp sserve` it does this to your `index.html`:
- inject all bower javascript and css files (Angular,...)
- inject all of your app files (compiled css, angular files, ...)

`gulp serve` also livereloads your application when changing/adding/deleting files to immediately show the changes you make in your browser. For your convenience any occurring **ESLint or jsonlint errors** will be presented to you on every livereload.
