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
    return fetch(`${remoteURL}/savedEvents/?_expand=event&_expand=user&_embed=organization`)
    .then(result => result.json())
}

export const getSavedEventById = (id) => {
    return fetch(`${remoteURL}/savedEvents/${id}`)
    .then(result => result.json())
    //gets single savedEvent by ID
}

export const updateSavedEvent = (savedEvent) => {
    return fetch(`${remoteURL}/savedEvents/${savedEvent.id}`, {
        method: "PUT",
        headers: {
            "Contest-Type": "application/json"
            // ^ security measures before updating json data
        },
        body: JSON.stringify(savedEvent)
        //stringifies savedEvent that is passed in
    }).then(result => result.json())
}
