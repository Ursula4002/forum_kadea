import {useState} from 'react'
import './App.css'
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import UserContext from "./context/UserContext.js";

function App() {
   const [pseudo, setPseudo] = useState(null);

   const handleLoginSubmit = (userName) => {
       setPseudo(userName);
   };

   return (
       pseudo ?
           <UserContext.Provider value={{isLogged: true, pseudo: pseudo}}>
               <Home/>
           </UserContext.Provider>
           :
           <Login onLoginSubmit={handleLoginSubmit}/>
   );
}

export default App
