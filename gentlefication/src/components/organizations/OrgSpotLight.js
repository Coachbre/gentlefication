import { Button } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import { getOrgById } from '../../modules/OrgManager';
import { SpotLightCard } from './SpotLightCard';

import './OrgSpotlight.css'

export const OrgSpotLight = () => {

    const [spotLightId, setSpotLightId] = useState([]);


   const refreshSpotLight = () => {
       getOrgById((Math.floor(Math.random() * 4)) + 1)
       //may need to be updated if organization array length changes
           .then(randomOrg => {
                setSpotLightId(randomOrg);
           });
       
   }

   useEffect(() => {
       refreshSpotLight();
        
   }, []);

   return (
       <>
       <div className="org-spotlight">
       {
           <SpotLightCard
           key={spotLightId}
           spotLight={spotLightId}
           refreshSpotLight={refreshSpotLight} />
       }
       </div>
       </>
   )
    
}