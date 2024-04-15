// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  env: "DEV",
  production: false,
  appUrl:"http://localhost:4200",
  firebaseConfig:{
    apiKey: "AIzaSyA3QJ8CJQLZ3pE76niI95wriYeFi3ACHmg",
    authDomain: "invictara-web.firebaseapp.com",
    projectId: "invictara-web",
    storageBucket: "invictara-web.appspot.com",
    messagingSenderId: "899928524548",
    appId: "1:899928524548:web:7a3a944abd70d7ae7e3251",
    measurementId: "G-0TLLXTD4QE"
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
