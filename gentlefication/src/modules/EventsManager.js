// Event manager handles all event related fetch calls

const remoteURL = "http://localhost:8088"
// 8088 is the port chosen to host json server

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}

export const getEventOrg = () => {
    return fetch(`${remoteURL}/events/?_expand=organization`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}

export const getAllSaved = () => {
    return fetch(`${remoteURL}/savedEvents`)
    .then(result => result.json())
}

export const getSavedInfo = () => {
    return fetch(`${remoteURL}/savedEvents/?_expand=event&_expand=user`)
    .then(result => result.json())
}
