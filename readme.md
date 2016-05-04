# require-substitution

This is a simpler version of mockery and handful of other tools for mocking modules. This one has been created just for the purpose of running webpack browser side scripts inside node.js. Webpack has couple of loaders, which aren't supported in node.js. In some cases for isomorphic rendering, you might not want to build and bundle your app with webpack to use on the server, rather you'd like to require it inside node directly from source code. This package helps with that-requires of css/scss/less files can be safely ignored.

## install

```
npm i require-substitution
```

## Usage

```javascript
const transformRequire = require('require-substitution')
transformRequire.add((path) => {  // sample
  if (path.endsWith('.css') || path.endsWith('.scss')) {
    return null // but you could also fs.read those files and save them somewhere to serve them inside index.html
  }
})

```

You can also disable a substitution by:

```javascript
transformRequire.remove(fn)
```
