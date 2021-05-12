// Council manager handles all council member related fetch calls
import {  userStorageKey, userZipStorageKey } from "../components/auth/authSettings";

const remoteURL = "http://localhost:8088"
// 8088 is the port chosen to host json server
const currentUser = JSON.parse(sessionStorage.getItem("gentle_user"))
const currentUserZip = JSON.parse(sessionStorage.getItem(userZipStorageKey))

export const getAllCouncil= () => {
    return fetch(`${remoteURL}/councilMembers/`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}

export const getCouncilDistricts= () => {
    return fetch(`${remoteURL}/councilMembers?_expand=district`)
    .then(result => result.json())
    //waits for response, then parses into json data
    //expand pulls district ID from council array
}

export const repByZipcode = () => {
    return fetch(`${remoteURL}/districts/?zipcode=${currentUserZip}&_embed=councilMembers`)
    .then(result => result.json())
    //fetches each district by user zipcode then provides council member with matching districtId
}
