// iterates over and populates full list of organizations

import { React, useEffect, useState } from 'react';
import { getAllOrgs } from '../../modules/OrgManager';
import { OrgCard } from './OrgCard';
// import { SelectedOrgEvents } from './SelectedOrgEvents';


export const Orgs = () => {


    const [orgs, setOrgs] = useState([]);
    const getOrgs = () => {
        //getOrgs calls on getAllOrgs (from Org manager) to return json data
        return getAllOrgs()
            .then((orgsFromAPI) => {
                setOrgs(orgsFromAPI)
            });
    };




    useEffect(() => {
        getOrgs();
    }, []);
    return (
        <div className="orgPageView">
            <div className="orgPageContainer">
                <div className="orgList">
                    {/* <h1 className="orgListHeader">ORGANIZATIONS & NONPROFITS</h1> */}

                    {orgs.map(orgObj => {
                        return (
                            <OrgCard
                                key={orgObj.id}
                                //good convention
                                org={orgObj}
                            //orgObj (each organization in array) is set equal to 'org'
                            />
                        )
                    })}
                </div>

            </div>
        </div>
    );
};