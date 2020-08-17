import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {

  
  apiKey: "AIzaSyCKbbqcIuYbyRZomPlOk7bJfxhDbt8GFB4",
  authDomain: "crown-cloth-store.firebaseapp.com",
  databaseURL: "https://crown-cloth-store.firebaseio.com",
  projectId: "crown-cloth-store",
  storageBucket: "crown-cloth-store.appspot.com",
  messagingSenderId: "1049915880258",
  appId: "1:1049915880258:web:75292adbd123bc9ad90edb",
  measurementId: "G-DC68T7B7SN"
      
};

export const createUserProfileDocument = async (userAuth , additionaData) =>
{
if(!userAuth) return ;
  
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const { displayName , email } = userAuth;
      const createAt = new Date();
      try {
     await userRef.set({
         displayName,
         email,
         createAt,
         ...additionaData
     })

      }
      catch(error){

        console.log("errro message in ceating id ",error.message )
      }
  }
return userRef;
  

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle =() =>auth.signInWithPopup(provider);

export default firebase;