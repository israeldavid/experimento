// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  direccionurl : 'http://www.omdbapi.com/',
  apiKey : '57dd2d56', // <-- Api que viene del servicio! http://www.omdbapi.com/?i=tt3896198&apikey=57dd2d56
  imagenpopup_uno : '../../../../assets/img/50500.png'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
