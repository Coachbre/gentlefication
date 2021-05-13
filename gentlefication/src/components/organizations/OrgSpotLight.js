import { Button } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import { getRandomId } from '../../modules/OrgManager';
import { SpotLightCard } from './SpotLightCard';

export const OrgSpotLight = () => {

    const [spotLightId, setSpotLightId] = useState([]);


   const refreshSpotLight = () => {
       getRandomId(id)
           .then(randomOrg => {
                setSpotLightId(randomOrg);
                console.log(spotLightId)
           });
       
   }

   useEffect(() => {
       refreshSpotLight();
        
   }, []);

   return (
       <>
       <h1>featured organization</h1>
       
       {
           <SpotLightCard
           key={spotLightId}
           spotLight={spotLightId}
           refreshSpotLight={refreshSpotLight} />
       }
       </>
   )
    
}