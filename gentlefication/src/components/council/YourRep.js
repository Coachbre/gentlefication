import { React, useEffect, useState } from 'react';
import { YourRepCard } from "../council/YourRepCard";
import { repByZipcode } from "../../modules/CouncilManager";
import { getUserId } from "../../modules/UserInfoManager";
import { userStorageKey, userZipStorageKey } from "../auth/authSettings";

export const YourRep = () => {

    const currentUser = JSON.parse(sessionStorage.getItem(userStorageKey))
    const currentUserZip = JSON.parse(sessionStorage.getItem(userZipStorageKey))

    const [repsByZip, setRepsByZip] = useState([]);

    const getYourRep = () => {

        return repByZipcode(currentUserZip)
            .then((matchingDistricts) => {
                setRepsByZip(matchingDistricts)
            });
        };
        
        useEffect(() => {
            getYourRep();
        }, []);
    
        console.log(repsByZip)
    return (
        <div>
            {repsByZip.map(districtObj => {
                return (
                    <ul>
                        <YourRepCard
                            key={districtObj.id}
                            district={districtObj}
                        />
                    </ul>
                )
            })}


        </div>
    )
}