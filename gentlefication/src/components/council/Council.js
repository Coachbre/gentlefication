// iterates over and populates full list of council members

import { React, useEffect, useState } from 'react';
import { getCouncilDistricts } from '../../modules/CouncilManager';
import { CouncilCard } from './CouncilCard';

export const Council = () => {
    
    const [council, setCouncil] = useState([]);
    const getCouncil = () => {
        //getCouncil calls getAllCouncil (from council manager) to return json data
        return getCouncilDistricts()
        .then((councilFromAPI) => {
            setCouncil(councilFromAPI)
        });
    };

    // const [district, setDistrict] = useState([]);
    // const getDistricts = () => {
    //     return getCouncilDistricts()
    //     .then((districtInfo) => {
    //         setDistrict(districtInfo)
    //     })
    // };


    useEffect(() => {
        getCouncil()
    }, []);
    return (

        <div className="councilMembers">
            <h1 className="councilHeader">CITY COUNCIL</h1>
            <div className="memberCard">
                {council.map(councilObj => {
                    return (
                        <ul>
                            <CouncilCard
                            key={councilObj.id}
                            //good convention
                            council={councilObj}
                            /*councilObj (each council member in array) is now equal to 'council'
                            and will be passed into org card as prop? */
                      
                            />
                        </ul>
                    )
                } )}
            </div>
        </div>
    );
};