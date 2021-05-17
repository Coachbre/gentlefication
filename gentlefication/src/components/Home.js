import { React } from 'react';
import { SavedEvents } from "./events/SavedEvents";
import { YourRep } from "./council/YourRep";
import { OrgSpotLight } from "./organizations/OrgSpotLight";
import './Home.css';

export const Home = () => {
    return (
        <>
            <section class="homePageView">
            <div className="homePageContainer">
                <div className="homePageSpacing"> </div>
                <div className="homeEvents">
                    <SavedEvents />
                </div>

                <aside>
                    <div  className="home-aside">
                    <YourRep />
                    <OrgSpotLight />
                    </div>
                </aside>
                </div>
            </section>
        </>
    )
}