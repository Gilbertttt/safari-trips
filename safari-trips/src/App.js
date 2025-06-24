import logo from './logo.svg';
import './App.css';
import NavLinks from "./components/navLinks"
import LoadingPage from './components/LoadingPage';
import { useEffect, useState } from 'react';
import Home from './Pages/home';

const App = () => {
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
 const timer = setTimeout(() => {
setIsLoading(false);
 }, 5000)
 return () => clearTimeout(timer)
}, [])
  
  return (
    <div className="App">
    {isLoading ? (
    <LoadingPage/>
    ): (
      <header className="">
      <section>
          <Home />
      </section>  
      </header>
    )}  
    </div>
  );
}
export default App;
