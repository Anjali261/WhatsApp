import logo from './logo.svg';
import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
// There are two types of expport in react . Default and name. If you are doing name xeport then you have to give curly braces.
// import {Messanger} from "./component/Messanger"
//secretId: `150513342612-4kbut9bg0orkavf1i9j8br19mshe61cr.apps.googleusercontent.com`
function App() {
  const clientId = `150513342612-4kbut9bg0orkavf1i9j8br19mshe61cr.apps.googleusercontent.com`
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
