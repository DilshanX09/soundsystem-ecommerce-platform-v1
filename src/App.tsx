import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/Home.view';
import AuthenticationView from './views/Authentication.view';
import AccountVerificationView from './views/AccountVerification.view';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/users/authenticate" element={<AuthenticationView />} />
          <Route path="/users/account-verification" element={<AccountVerificationView />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
