// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  firebase: {
    projectId: 'tutorat-bfea3',
    appId: '1:904689219789:web:37f126460e146fdb765184',
    storageBucket: 'tutorat-bfea3.appspot.com',
    apiKey: 'AIzaSyDdPuqpKL0kE2W2LbRgEq9EnpVIr7xnetY',
    authDomain: 'tutorat-bfea3.firebaseapp.com',
    messagingSenderId: '904689219789',
    measurementId: 'G-FL5VTY98F8',
  },
  production: false,
  host:'http://localhost:8080/api/'
};

const app = initializeApp(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
