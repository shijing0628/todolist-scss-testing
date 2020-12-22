import firebase from 'firebase/app'
import 'firebase/firestore'


// get config from firebase- setting - </> at the bottom-click
const firebaseConfig = {
 apiKey: "AIzaSyB3V2LDK2Ecur3miMPvjJRA7OoB9FRZF7U",
 authDomain: "todo-list-react-testing.firebaseapp.com",
 databaseURL: "https://todo-list-react-testing-default-rtdb.firebaseio.com",
 projectId: "todo-list-react-testing",
 storageBucket: "todo-list-react-testing.appspot.com",
 messagingSenderId: "214899241396",
 appId: "1:214899241396:web:6cf28420498af79c0f02e1",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
export { firebaseApp as firebase };