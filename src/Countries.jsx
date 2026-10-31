import { use, useState } from "react";
import Country from "./Country";

function Countries({ countriesPromise }) {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log(country);//returns the object for the country thats been clicked
  
    setVisitedCountries([...visitedCountries,country]);
  };
// console.log(visitedCountries);//returns all the coutry(s) thats been stored after being clicked 'visited'

  const countriesData = use(countriesPromise);
  // console.log(countriesData); //array of objects

  return (
    <div>
      <p className="text-2xl">
        Total Number Of Countries : {countriesData.length}
      </p>
      <p className="text-2xl">Total Number Of Countries Visited : {visitedCountries.length} </p>
      {visitedCountries.length >0 ? <p>You have visited the following countries - </p> : ""}
      {
        visitedCountries.map((country,index)=><li key={index}>{index+1}. {country.name.common}</li>)
      }
      <div className="grid grid-cols-4 gap-5">
        {countriesData.map((country, index) => (
          <Country
            country={country}
            key={index}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}

export default Countries;
