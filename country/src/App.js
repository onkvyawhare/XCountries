import { useEffect, useState } from "react";



function App() {

  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=>setcountries(data))
    .catch((err) => console.error("error fetching data: ",err))
    
  
    
  }, []);

  const containerStyle={
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
  };

  const cardStyle={
    width:"200px",
    border:"1px solid #ccc",
    borderRadius:"10px",
    margin:"10px",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

        

  };

  const imageStyle={
    width:"100px",
    height:"100px",


  }
  
  return (
    <div style={containerStyle}>
      {
        countries.map((country) => {
          return(
            <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flags of ${country.name.common}`}
              style={imageStyle}

            />
            <h2>{country.name.common}</h2>
          </div>
          )
      })
      };


    </div>
   
  );
}

export default App;
