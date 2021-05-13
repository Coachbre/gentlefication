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

export const getRandomId = (id) => {
    return fetch(`${remoteURL}/organizations/${id}`)
    .then(result => result.json())
    .then(organizations => {
        const randomIndex =  Math.floor(Math.random() * organizations.length);
        //takes the number of objects in the org array and returns a whole number between 0 and that #
        const randomOrg = organizations[randomIndex];
        //pulls out the organization object at the given index # (randomIndex)
        return randomOrg; 
    });
}
