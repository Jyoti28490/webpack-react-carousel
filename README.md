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

### Webpack

Webpack also needs a lot of stuff to work. Essentially, for every type of file we want to bundle, we'll need a specific loader.

Hence, here's what we need:

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

`webpack` and `webpack-cli` follow the same principle as Babel - one is the core package and the other let's us access those tools from the CLI.

`webpack-dev-server` is what we need for local development. You'll notice that `package.json` never actually references it from a script, but it is required to run `webpack serve`:

```
[webpack-cli] For using 'serve' command you need to install: 'webpack-dev-server' package
```

Finally, the loaders are what we need for the different files we want to process. A `ts-loader` also exists, but, since we're using Babel to compile our JS files, we don't actually need it.

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
