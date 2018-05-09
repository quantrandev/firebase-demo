// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCuTHd2QfiYBAqIlHUzAAG3PzZuWPoTjqw',
    authDomain: 'fir-demo-1be14.firebaseapp.com',
    databaseURL: 'https://fir-demo-1be14.firebaseio.com',
    projectId: 'fir-demo-1be14',
    storageBucket: 'fir-demo-1be14.appspot.com',
    messagingSenderId: '763672530398'
  }
};
