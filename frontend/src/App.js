import logo from './logo.svg';
import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';

// There are two types of expport in react . Default and name. If you are doing name xeport then you have to give curly braces.
// import {Messanger} from "./component/Messanger"
//secretId: `150513342612-4kbut9bg0orkavf1i9j8br19mshe61cr.apps.googleusercontent.com`
function App() {
  const clientId = `150513342612-4kbut9bg0orkavf1i9j8br19mshe61cr.apps.googleusercontent.com`
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger />
    </GoogleOAuthProvider>
  );
}

export default App;
