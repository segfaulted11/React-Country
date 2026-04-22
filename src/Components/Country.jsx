import React, { useState } from 'react';

const Country = ({eachObj, handleVisitedCountries}) => {

    //deconstrcuturing
    const {name, ccn3, currencies, captial, region, languages, area, cca3, population, continents, flags } = eachObj;

    //state
    const [visited,setVisited] = useState(false);

    // static way ->
    // const handleVisited = () =>{
    //     setVisited(true);
    // }//by default text will be 'not visited' and when the button is clicked the text will be changed to 'visited' but it wont change any further when the button is clicked further. its not toggle.

    //making it toggle ->

    // way - 1 (if-elxe)
    // const handleVisited = () =>{
    //     if(visited){
    //         setVisited(false);
    //     }else{
    //         setVisited(true);
    //     }
    // }//by default the text will be 'not visited' and if visited == true, when the button will be clicked, then the state will be changed into false and the text will become 'not visited' and if visited == false, then when the button will be clicked, the state will be changed into true and the text will become 'visited'.

    //  way - 2 (ternary operator)
    // const handleVisited = () => {
    //       setVisited(visited ? false : true)
    // }

    
    // way - 3 (logical not operator)
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='bg-red-200 mb-4'>
            <img src={flags.flags.png} alt="" />
            <p>name : {name.common}</p>
            <p>Population : {population.population}</p>
            <p>Area : {area.area}
                {area.area>30000 ? " (Big Country)" : " (Small Country)"}
            </p>
           <button onClick={()=> {
            handleVisited();
            handleVisitedCountries(name.common);//sending the country name as the argument and from the parent component,event handling function 'handleVisitedCountries' is going recieve that. , so a particular country's button will be clicked, its gonna show that country's name.
           }//wrappping multiple event handling functions using arrow function
            } 
            className={`p-3 hover:cursor-pointer
                ${visited ? "text-white bg-red-400" : "bg-purple-500"}
                `}
                > 
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;