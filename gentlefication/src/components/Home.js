import { React } from 'react';
import { SavedEvents } from "./events/SavedEvents";

export const Home = () => {
    return ( <>
        <h1>Hello there, this is home. Friend.</h1>
        <SavedEvents />
        </>
    )
}