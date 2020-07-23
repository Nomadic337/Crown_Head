import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCai0PVGWxI5vx-d9NUu38N1Q4H8q8s_IA",
    authDomain: "e-com-db-5ae4d.firebaseapp.com",
    databaseURL: "https://e-com-db-5ae4d.firebaseio.com",
    projectId: "e-com-db-5ae4d",
    storageBucket: "e-com-db-5ae4d.appspot.com",
    messagingSenderId: "785849811381",
    appId: "1:785849811381:web:9692c23316f36dcb5e19fc",
    measurementId: "G-BDW9Z1WY3R"
};

// Firebase Interactions/Firebase snapShot to test if data/UserAuth exists after user sign in
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // create new user if it doesn't already exist
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }

    return userRef;
}
    


// Initializing firebase
firebase.initializeApp(config);
firebase.analytics();

// Google Sign in Popup
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;