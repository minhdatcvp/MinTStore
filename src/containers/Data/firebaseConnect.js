import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD16CmvKGvM7JYhJ9CcFgEneoVy6Ldzt4M",
    authDomain: "notereactmint.firebaseapp.com",
    databaseURL: "https://notereactmint.firebaseio.com",
    projectId: "notereactmint",
    storageBucket: "notereactmint.appspot.com",
    messagingSenderId: "697609354368",
    appId: "1:697609354368:web:ca614e8b880a128b507a65",
    measurementId: "G-TS4V5045VL"
  };
  firebase.initializeApp(firebaseConfig);

  export const noteData = firebase.database().ref('Account/');