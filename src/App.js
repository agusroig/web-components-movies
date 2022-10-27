import './App.css';
import  Movie  from "./components/movies";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      async function getData() {
        const response = await fetch('./movies.json');
        const json = await response.json();
        setData(json);
        setLoaded(true);
      }
      getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);
  
    return (
      <>
        <div className="container">
          <div className="col-12"><h1>My Movies</h1></div>
          <div className="col-sm">
            {loaded &&
              data.movies.map((movie, i) => (
                // Step 3 - Rename '<nexttech-movie' to match the name of your new React Component in 'movies.js'
                <Movie
                  // Do NOT remove this key attribute
                  key={i}
                  // Step 2 - Replace all of the attributes below with a single `data` attribute that have `movie` assigned as the value
                  data={movie}
                />
              ))}
            
          </div>
        </div>
      </>
    );
}

export default App;
