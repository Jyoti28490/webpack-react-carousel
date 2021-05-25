 # webpack-react-carousel

Here we have created a carousel which slides every 5 second on its own if no manual intervention is made else it is an infinite slider with mouse and swipe features and can be used on mobile and desktop

## Create project directory

First, create a new directory and cd into it:

```console
mkdir webpack-react-carousel && cd webpack-react-carousel
```
## Create a package.json file

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

`@babel/preset-react` Extends Babel support to JSX, for example turning JSX into functions 

`babel-loader` Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel

We can to set up a `.babelrc` file in a separate folder on root and it has to set as below, however we are including it as part of our webpack.config.js file :

```js
// .babelrc
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
}
```

### React Module

These 3 packages are the dependencies we need for our simple app.

`react` The react package contains only the functionality necessary to define React components.

`react-dom` The react-dom package provides DOM-specific methods that can be used at the top level of the App and it serves as the entry point to the DOM and server renders for React

`react-icons` For getting the arrow symbol in our Carousel App.

### Loaders Module

`style-loader` Inject CSS into the DOM.

`css-loader`  The css-loader interprets @import and url() like import/require() and will resolve them.

`url-loader`  A loader for webpack which transforms files into base64 URIs.

`file-loader` The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

## Plugins Module

`html-webpack-plugin`The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 

`mini-css-extract-plugin` This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.

`clean-webpack-plugin` A webpack plugin to remove/clean the dist folder.


### Create a webpack.config.js

After installation of all the above dependencies now it's time to create the webpack.config.js and below is the code to be placed inside the file:

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

## Scripts in package.json

Add the following lines of code under the scripts section in **package.json**  file

```
"dev": "webpack-dev-server --hot --open",
"build": "webpack --mode production",
"deploy": "gh-pages -d dist",
"publish": "npm run build && npm run deploy"

```
![image](https://user-images.githubusercontent.com/71496725/119441538-e78a6f80-bd43-11eb-9d12-d2c2a909a7c2.png)

## Complete Project Structure 

The complete project structure is as follows:

![image](https://user-images.githubusercontent.com/71496725/119441641-19033b00-bd44-11eb-9809-b260f46d6f61.png)

## The App module structure

The App structure looks like below:

![image](https://user-images.githubusercontent.com/71496725/119441791-58318c00-bd44-11eb-9aaa-3b8e3f90e5c8.png)

**And our Carousel App is Ready** :collision: 🔥 :boom:
