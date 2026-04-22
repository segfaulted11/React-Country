import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countriesDataProps}) => {

    const countriesData = use(countriesDataProps);// entire object
    const {countries} = countriesData;//array consisting 250 objects

    //lift up state -> 
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (countryNameAsparameter) =>{
        console.log(`you have clicked ${countryNameAsparameter} country.`);
    }
    //create the state in the parent Component(Countries.jsx). 
    //create the stateHandling function in the parent Component.
    //send that function as a props to the children component.
    //deconstruct the props in the children (Country.jsx) component.
    //use that function in the children component's button to an event. if theres already an event in that button, you can use arrow function for wrapping everything together.  


    return (

        <div>
            <h2>total countries : {countries.length}</h2>
            {/* {
                countries.map(eachObj => <div>
                    <p>{eachObj.name.common}</p>
                </div>)
            } */}

            <div className='grid grid-cols-3 gap-3'>
            {//same as the previous but this time it sents this to another component for rendidng insteading rendiring directly from here. parent sending it as props to the child.
                countries.map(eachObj => <Country eachObj={eachObj} key={eachObj.cca3.cca3} handleVisitedCountries={handleVisitedCountries}></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;