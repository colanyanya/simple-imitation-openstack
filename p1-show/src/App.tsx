import React from 'react';
import './App.css';
import {UnAuthenticApp} from "./screen/un-authentic-app";
import {AuthenticAPP} from "./screen/authentic-app";
import {useAuth} from "./context/auth-context";

function App() {
    const {user} = useAuth()
    return (
        <div>
            {user ? <AuthenticAPP/> : <UnAuthenticApp/>}
        </div>
    );
}

export default App;
