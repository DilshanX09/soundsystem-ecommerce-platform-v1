import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/Home.view';
import AuthenticationView from './views/Authentication.view';
import AccountVerificationView from './views/AccountVerification.view';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/users/authenticate" element={<AuthenticationView />} />
        <Route path="/users/account-verification" element={<AccountVerificationView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
