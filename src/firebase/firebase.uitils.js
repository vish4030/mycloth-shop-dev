
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyD-A5zmPU18GsdMMinDT9t0gUDJpDeJ38U",
    authDomain: "cloth-shop-db4030.firebaseapp.com",
    projectId: "cloth-shop-db4030",
    storageBucket: "cloth-shop-db4030.appspot.com",
    messagingSenderId: "548752405408",
    appId: "1:548752405408:web:2d02d25e8d976b3b012ac5",
    measurementId: "G-EE448Z4QD8"
  };

   export const createUserProfile = async (userAuth, additionalData) => {
       if (!userAuth) return;

     const userRef =firestore.doc( `users/${userAuth.uid}` );

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })

        } catch (error){
         console.log('error create', error.message)
        }

      } 
      return userRef;

    };
 

 firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt:'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;