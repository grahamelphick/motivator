import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

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

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);