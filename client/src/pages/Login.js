import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseui from 'firebaseui';
import firebaseConfig from '../firebaseConfig';

// function Login() {

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
// });

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
// };

// ui.start('#firebaseui-auth-container', uiConfig);


//     return (
//         <div>
//         <h1>Welcome to My Awesome App</h1>
//         <div id="firebaseui-auth-container"></div>
//         <div id="loader">Loading...</div>
//         </div>
//     );
// }


// export default Login;



const firebaseApp = firebase.initializeApp(firebaseConfig);

function Login(props) {
    const {
        user,
        signOut,
        signInWithGoogle,
    } = props;

    return (
    <div className="App">
        <header className="App-header">
            {
                user
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
            }

            {
                user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
        </header>
    </div>
    );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

// firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//     });

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);