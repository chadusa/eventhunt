import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCdGpdoeh9AfpHh_hb0cSSma28P0wqXkgM",
  authDomain: "thaicoolplace-af023.firebaseapp.com",
  databaseURL: "https://thaicoolplace-af023.firebaseio.com",
  projectId: "thaicoolplace-af023",
  storageBucket: "thaicoolplace-af023.appspot.com",
  messagingSenderId: "788218706971"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;