import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/landingpage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateNote from './screens/createNote/CreateNote';
import SingleNote from './screens/singleNote/SingleNote';
import './App.css';


const App = () => {
  const[search, setSearch] = useState('');
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/register' element={<RegisterScreen />} exact />
          <Route path='/login' element={<LoginScreen />} exact />
          <Route path='/mynotes' element={<MyNotes search={search} />} />
          <Route path='/createnote' element={<CreateNote />} />
          <Route path='/note/:id' element={<SingleNote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
