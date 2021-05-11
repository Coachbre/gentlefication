import { React, useEffect, useState } from 'react';
import { YourRepCard } from "../council/YourRepCard";
import { repByZipcode } from "../../modules/CouncilManager";
import { getUserId } from "../../modules/UserInfoManager";

export const YourRep = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("gentle_user"))
    const [yourRep, setYourRep] = useState([]);

    const getYourRep = () => {

        return repByZipcode()
            .then((response) => {
                setYourRep(response)
            });
    };

    useEffect(() => {
        getYourRep();
    }, []);

    return (
        <div>
            <h1> who is your council rep</h1>
            <div>
                
                        <YourRepCard
                      
                        />
                    
            </div>
        </div>
    )
}