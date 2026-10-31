import { use } from "react";
import Country from "./Country";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  // console.log(countriesData); //array of objects
  return (
    <div>
      <h1 className="text-3xl font-bold">Countries</h1>
      <p className="text-2xl">Total Countries : {countriesData.length} </p>
      <div className="grid grid-cols-4 gap-5">
        {countriesData.map((country, index) => (
          <Country country={country} key={index}></Country>
        ))}
      </div>
    </div>
  );
}

export default Countries;
