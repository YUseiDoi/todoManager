  import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAUUvGbN_kl1Ekmhm5swrXQ6-PUx7jmOME",
    authDomain: "taskmanager-cf67f.firebaseapp.com",
    projectId: "taskmanager-cf67f",
    storageBucket: "taskmanager-cf67f.appspot.com",
    messagingSenderId: "615892918906",
    appId: "1:615892918906:web:56da6ad9f3b096071891c3",
    measurementId: "G-5YGYYEHP8F"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database();
  const taskRef = database.ref('task');
  const userRef = database.ref('user');

  export const pushTask = ({userId, date, title, detail}) => {
      taskRef.push({userId, date, title, detail});
  }

  export const pushUser = ({name, userId}) => {
      userRef.push({name, userId});
  }