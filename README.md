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

**Here's what we installed:**

```shell
npm i --D \
    webpack \
    webpack-cli \
    webpack-dev-server \
    style-loader \
    css-loader \
    babel-loader
    html-webpack-plugin\
    css-loader\
    style-loader\
    clean-webpack-plugin\
    core-js\
    file-loader\
    mini-css-extract-plugin\
    regenerator-runtime\
    url-loader\
```
Let's see in detail what each module does:

### Webpack Module

`webpack` : Installs the webpack module bundler.

`webpack-cli` Offers a variety of commands that make it easier to work with webpack from the CLI.

`webpack-dev-server` is what we need for local development.Allows us to use a simple web server with hot reload. You'll notice that `package.json` never actually references it from a script, but it is required to run `webpack serve`:

```
[webpack-cli] For using 'serve' command you need to install: 'webpack-dev-server' package
```
### Babel Module

Getting Babel to work requires quite a few packages, you can install them like this:

```shell
npm i --D \
  @babel/core \
  @babel/preset-env \
  @babel/preset-react\
  babel-loader
```
`babel-core` is the compiler, the main thing we need.Transforms your ES6 code into ES5.

`preset-env` Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support. 

`preset-react` Babel preset for all React plugins, for example turning JSX into functions

`babel-loader` Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel

Finally, we need to set up a `.babelrc` file, specifying to the compiler the presets we're using:

```js
// .babelrc
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
}
```

### React Module



### Loaders Module

`style-loader` Inject CSS into the DOM.

`css-loader`  The css-loader interprets @import and url() like import/require() and will resolve them.

`url-loader`  A loader for webpack which transforms files into base64 URIs.

`file-loader` The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

### Create a webpack.config.js

And, like with Babel, we need a `webpack.config.js` file:

```js
// webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: './app/app.js', // our entry point, as mentioned earlier
    mode: 'development',
    module: {
        rules: [
     {
        test: /\.js$/, // matches .js files
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader", // uses babel-loader for the specified file types 
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
          }
        }
      }
      {
             test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
             use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=200000&name=Assets/[name].[ext]'
      },
        ],
    },
    output: {
    filename: "myBundle.[hash].js", // our output bundle
    path: path.resolve(__dirname, "dist") 
    },
    
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
   plugins: [new HtmlWebpackPlugin({ template: "./app/index.html" })],
   devtool: 'eval-source-map', // builds high quality source maps
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.[hash].css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())

}

module.exports = config


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
