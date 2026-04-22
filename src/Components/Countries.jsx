import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesDataProps}) => {

    const countriesData = use(countriesDataProps);// entire object
    const {countries} = countriesData;//array consisting 250 objects

    return (

        <div>
            <h2>total countries : {countries.length}</h2>
            {/* {
                countries.map(eachObj => <div>
                    <p>{eachObj.name.common}</p>
                </div>)
            } */}

            <div className='grid grid-cols-3 gap-3'>
            {//same as the previous but this time it sents this to another component for rendidng insteading rendiring directly from here.
                countries.map(eachObj => <Country eachObj={eachObj}></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;