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

    useEffect(() => {
        getCouncil()
    }, []);
    return (

        <div className="councilPageView">
            <div className="councilPageContainer">
                <div className="memberList">
                    {council.map(councilObj => {
                        return (
                            <CouncilCard
                                key={councilObj.id}
                                //good convention
                                council={councilObj}
                            /*councilObj (each council member in array) is now equal to 'council'
                            and will be passed into org card as prop? */

                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};