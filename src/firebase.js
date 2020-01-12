import firebase from 'firebase/app';
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyBFj0IwozH5bZ-WByTCsU6oQQ72A-j_kMA",
    authDomain: "app-react-test-acae3.firebaseapp.com",
    databaseURL: "https://app-react-test-acae3.firebaseio.com",
    projectId: "app-react-test-acae3",
    storageBucket: "app-react-test-acae3.appspot.com",
    messagingSenderId: "405346614618",
    appId: "1:405346614618:web:79f9fc76262c7a39dc4763"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
