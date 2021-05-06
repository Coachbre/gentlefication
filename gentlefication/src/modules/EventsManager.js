// Event manager handles all event related fetch calls

const remoteURL = "http://localhost:8088"
// 8088 is the port chosen to host json server

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}


export const getEventById = (id) => {
    return fetch(`${remoteURL}/events/${id}`)
    .then(result => result.json())
    //gets single savedEvent by ID
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
    return fetch(`${remoteURL}/savedEvents/?_expand=event`)
    .then(result => result.json())
}

export const getSavedEventById = (id) => {
    return fetch(`${remoteURL}/savedEvents/${id}`)
    .then(result => result.json())
    //gets single savedEvent by ID
}

export const updateSavedEvent = (editedSavedEvent) => {
    return fetch(`${remoteURL}/savedEvents/${editedSavedEvent.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
            // ^ security measures before updating json data
        },
        body: JSON.stringify(editedSavedEvent)
        //passed in savedEvent (by id) is stringified
    }).then(result => result.json())
}

export const savedEventRemoval = (id) => {
    return fetch(`${remoteURL}/savedEvents/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addToSavedList = (addedEvent) => {
    return fetch (`${remoteURL}/savedEvents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(addedEvent)
    }).then(result => result.json())
}