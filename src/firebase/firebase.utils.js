import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyA_obaC79hjy3JwJI2ie1iUpBtw3ngL0lo",
    authDomain: "crwn2-db-5d54c.firebaseapp.com",
    databaseURL: "https://crwn2-db-5d54c.firebaseio.com",
    projectId: "crwn2-db-5d54c",
    storageBucket: "crwn2-db-5d54c.appspot.com",
    messagingSenderId: "435638389320",
    appId: "1:435638389320:web:078e3b92afd5bfd2e6267d",
    measurementId: "G-6222DEKEKV"
  };

  export const createUserProfileDocument=async (userAuth, additionalData)=>{
    if(!userAuth)return;

    const userRef =firestore.doc(`users/${userAuth.uid}`)

    const snapShot =await userRef.get();

    //OR const snapShot= await firestore.collection('users').doc(`${userAuth}`).get();
    
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date()
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating Auth')

      }
    }
    return userRef
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;