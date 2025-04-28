const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'microfrontend',
  exposes: {
    './HomeComponent': './src/app/home/home.component.ts', 
  },
  shared: {
    '@angular/core': { singleton: true },
    '@angular/common': { singleton: true },
    '@angular/router': { singleton: true },
  },
});
