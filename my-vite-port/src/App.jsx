import { useEffect, useState } from "react";
import Port from './components/Port'
import logo from "../src/assets/tg.jpg";

import './App.css'

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 8000);
  }, []);
 

  return (
    <>
     {loading ? (
        <div className="flex justify-center h-screen">
          <img src={logo} alt="logo" className="animate-pulse h-[98vh] my-2" />
        </div>
              ) : (
     <Port />
     )}
    </>
  )
}

export default App
