import { React } from 'react';
import { SavedEvents } from "./events/SavedEvents";
import { YourRep } from "./council/YourRep";
import { OrgSpotLight } from "./organizations/OrgSpotLight";
import './Home.css';

export const Home = () => {
    return (<>
        <h1>HOME</h1>

        <div className="events">
            <SavedEvents />
        </div>
        
        <aside>
            <YourRep />
            <OrgSpotLight />
        </aside>
    </>
    )
}