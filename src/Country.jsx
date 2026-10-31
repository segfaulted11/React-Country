import { useState } from "react";

function Country({ country }) {
  // console.log(country)//each country object

  const [visited, setVisited] = useState(false);

  return (
    <div className={`border-2 my-4 ${visited?"border-white" :"border-amber-900"}`}>
      <img src={country.flags.flags.png} alt="" className="h-50 w-full" />
      <p className="text-xl">Name : {country.name.common}</p>
      <p className="text-xl">Population : {country.population.population}</p>
      <p className="text-xl">
        Area : {country.area.area}(
        {country.area.area > 300000 ? "Big Country" : "Small Country"})
      </p>
      <button
        className={`btn  w-full ${visited ? "btn-success":"btn-soft"}`}
        onClick={() => setVisited(!visited)}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
}

export default Country;
