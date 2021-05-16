import { React } from 'react';
import { SavedEvents } from "./events/SavedEvents";
import { YourRep } from "./council/YourRep";
import { OrgSpotLight } from "./organizations/OrgSpotLight";
import './Home.css';

export const Home = () => {
    return (
        <>
            <section class="homePageView">

                <div className="homeEvents">
                    <SavedEvents />
                </div>

                <aside className="home-aside">
                    <YourRep />
                    <OrgSpotLight />
                </aside>
            </section>
        </>
    )
}