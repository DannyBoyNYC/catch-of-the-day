import Rebase from 're-base';
import firebase from 'firebase';
import devkeys from './config/keys'

// console.log('devkeys', devkeys)
// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyB3J1VYkRtRrL2DW19Mz-F3gDzRFP1LiEw',
//   authDomain: 'cotd-dd.firebaseapp.com',
//   databaseURL: 'https://cotd-dd.firebaseio.com',
// });

const firebaseApp = firebase.initializeApp(devkeys);
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
