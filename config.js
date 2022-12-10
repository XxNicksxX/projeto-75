import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAvnO0yNt3PET0rKPEYxd_9bxfLPErOcck",
  authDomain: "bicicleta-4fc58.firebaseapp.com",
  projectId: "bicicleta-4fc58",
  storageBucket: "bicicleta-4fc58.appspot.com",
  messagingSenderId: "628003208937",
  appId: "1:628003208937:web:878143647060b0312eba78"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
