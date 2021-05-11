import { React } from 'react';
import { SavedEvents } from "./events/SavedEvents";
import { YourRep } from "./council/YourRep";

export const Home = () => {
    return (<>
        <h1>HOME</h1>

        <div>
            <SavedEvents />
        </div>
        
        <aside>
            <YourRep />
        </aside>
    </>
    )
}