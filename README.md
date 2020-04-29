
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom

Next, we’ll add development-time dependencies on the ts-loader and source-map-loader.

npm install --save-dev typescript awesome-typescript-loader ts-loader source-map-loader   

install babel 

npm install @babel/core babel-loader @babel/preset-react @babel/preset-typescript @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev

**loader**

Two style loaders which will be used to compile your CSS in webpack.

npm install react-hot-loader tslint-loader thread-loader cache-loader url-loader file-loader css-loader style-loader --save-dev

**webpack**

https://vaadin.com/learn/tutorials/learn-pwa/production-pwa-webpack-setup

html-webpack-plugin

npm install html-webpack-plugin --save-dev

webpack-dev-server

webpack-dev-server watches our changes and refreshes the webpage whenever any change is made to our components.

npm install webpack-dev-server --save-dev

Adding - webpack merge 

Let's start by installing webpack-merge and splitting out the bits we've already worked on in previous guides:

https://webpack.js.org/guides/production/?_sm_au_=iVVkQj2TQVMqNt6QJf17vK0T8QQJ4


**tslint**

tslint is used in your IDE and will give you underline your code in red if it is does not adhere to the rules you’ve set in tslint.json.

npm install tslint tslint-immutable --save-dev

create tsconfig.json and copy the following 



``` json
{
  "compilerOptions": {
    "jsx": "react",
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false,
    "suppressImplicitAnyIndexErrors": true,
    "outDir": "target/classes/static/app",
    "lib": ["es2015", "es2017", "dom"],
    "typeRoots": ["node_modules/@types"],
    "types": ["webpack-env", "jest"],
    "allowJs": true,
    "checkJs": false,
    "baseUrl": "./",
    "paths": {
      "app/*": ["src/main/webapp/app/*"]
    },
    "importHelpers": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/main/webapp/app/**/*"],
  "exclude": ["node_modules"]
}
```


Axios Redux Reducers
react-redux

npm install --save axios redux react-redux redux-thunk redux-logger
https://react-redux.js.org/using-react-redux/connect-mapdispatch?_sm_au_=iVV0qDW7qDPjf7BQJf17vK0T8QQJ4

npm install --save-dev @types/react-redux @types/react @types/react-dom @types/react-router-dom @types/redux @types/webpack-env




Server Side 

Error Encoded password does not look like BCrypt
Reason Load by user name not having the encoded password 
