import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB3J1VYkRtRrL2DW19Mz-F3gDzRFP1LiEw',
  authDomain: 'cotd-dd.firebaseapp.com',
  databaseURL: 'https://cotd-dd.firebaseio.com',
});
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
