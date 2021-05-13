// Org manager handles all organizational related fetch calls

const remoteURL = "http://localhost:8088"
// 8088 is the port chosen to host json server

export const getAllOrgs = () => {
    return fetch(`${remoteURL}/organizations`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}

export const getOrgById = (id) => {
    return fetch(`${remoteURL}/organizations/${id}`)
    .then(result => result.json())
}

export const getOrgEventById = (id) => {
    return fetch(`${remoteURL}/events/?organizationId=${id}`)
    .then(result => result.json())
}


