import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDjPtLLc1Bt5juhHbcBeqy92PL1Z8MMKEc",
    authDomain: "drive-clone-4211b.firebaseapp.com",
    projectId: "drive-clone-4211b",
    storageBucket: "drive-clone-4211b.appspot.com",
    messagingSenderId: "765415495425",
    appId: "1:765415495425:web:28254e205fbb69501bed00"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db,storage,auth,provider }