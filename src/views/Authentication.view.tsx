import { useState } from "react";
import LoginScreen from "./auth-models/Login.screen";
import RegisterScreen from "./auth-models/Register.screen";

const AuthenticationView = () => {

     const [view, setView] = useState<'login' | 'register'>('login');

     return view === 'login' ? <LoginScreen changeView={setView} /> : <RegisterScreen changeView={setView} />;
}

export default AuthenticationView;