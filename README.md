# webpack-react-carousel
React Carousel built with Webpack

## Create project directory

First, create a new directory and cd into it:

```console
mkdir webpack-react-carousel && cd webpack-react-carousel
```

Next, let’s initialize the app with npm to manage all our dependencies.

```console
npm init -y
```

Great! Now you have your package.json file set up.
## Install Dependencies

Next up, the dev dependencies need to be installed for this application. Run this command and continue below for a breakdown of everything we just installed.

```console
npm i webpack webpack-manifest-plugin webpack-cli webpack-dev-server babel-loader @babel/preset-react @babel/preset-env @babel/core html-webpack-plugin css-loader style-loader clean-webpack-plugin core-js file-loader mini-css-extract-plugin regenerator-runtime url-loader -D && npm i react react-dom react-icons -S
```

What we just installed:

**Webpack**: bundles all our files into one file.

### Babel 

Getting Babel to work requires quite a few packages, you can install them like this:

```shell
npm i --D \
  @babel/core \
  @babel/cli \
  @babel/preset-env \
  @babel/preset-react
```
`babel-core` is the compiler, the main thing we need.

`babel-cli` will let us use the compiler via the CLI.

The last two packages are Babel "templates" (presets), for dealing with various use cases. `preset-env` is used to prevent us from having headaches, allowing us to write modern JS while ensuring the output will work across clients. `preset-react` are quite self-explanatory we are using React, so we'll be needing them.

Finally, we need to set up a `.babelrc` file, specifying to the compiler the presets we're using:

```js
// .babelrc
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
}
```
**babel-loader**: works with Webpack to transpile ES6+ into ES5 which is supported by older browsers
@babel/preset-react: extends Babel support to JSX
html-webpack-plugin: “simplifies the creation of HTML files to serve your Webpack bundles” -https://webpack.js.org/plugins/html-webpack-plugin/
webpack-dev-server: allows you to use Webpack with a development server that provides live reloading.
webpack-cli: “webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom Webpack project.” -https://www.npmjs.com/package/webpack-cli
css-loader: allows Webpack to convert the CSS file into a JavaScript string.
style-loader: inserts the JavaScript string into HTML dom.
@babel/plugin-proposal-class-properties: “This plugin transforms static class properties as well as properties declared with the property initializer syntax” -https://www.npmjs.com/package/@babel/plugin-proposal-class-properties
react: JavaScript library
react-dom: “Serves as the entry point to the DOM and server renderers for React” -https://www.npmjs.com/package/react-dom
