// iterates over and populates full events list

import { React, useEffect, useState } from 'react';
import { getAllOrgs } from '../../modules/OrgManager';
import { OrgCard } from './OrgCard';

export const Orgs = () => {

    const [orgs, setOrgs] = useState([]);
    const getOrgs = () => {
        //getOrgs called on getAllOrgs (from Org manager) to return json data
        return getAllOrgs()
            .then((orgsFromAPI) => {
                setOrgs(orgsFromAPI)
            });
    };


    useEffect(() => {
        getOrgs();
    }, []);
    return (

        <div className="orgList">
            <h1 className="orgListHeader">COMMUNITY ORGANIZATIONS</h1>
            <div className="orgCard">
                {orgs.map(orgObj => {
                    return (
                        <ul>
                            <OrgCard
                                key={orgObj.id}
                                //good convention
                                org={orgObj}
                            //orgObj (ecah organization in array) is set equal to 'org'
                            />
                        </ul>
                    )
                })}
            </div>
        </div>

    );
};