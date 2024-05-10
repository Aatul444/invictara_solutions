// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  env: "DEV",
  production: false,
  appUrl:"http://localhost:4200",
  firebaseConfig:{
    apiKey: "AIzaSyBCotBh7C79z3bS5MzbCrNXyzI9Uuf0Lx4",
    authDomain: "invictarasolutions.firebaseapp.com",
    databaseURL: "https://invictarasolutions-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "invictarasolutions",
    storageBucket: "invictarasolutions.appspot.com",
    messagingSenderId: "854947211820",
    appId: "1:854947211820:web:2947fc66a68cc872bb7f89"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
