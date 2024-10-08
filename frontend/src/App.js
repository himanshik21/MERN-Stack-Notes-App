import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/landingpage/LandingPage';

function App() {
  return (
    <>
    <Header />
    <main>
      <LandingPage />
    </main>
    <Footer />
    </>
  );
}

export default App;
