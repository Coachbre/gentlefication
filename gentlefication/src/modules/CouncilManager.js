// Council manager handles all council member related fetch calls

const remoteURL = "http://localhost:8088"
// 8088 is the port chosen to host json server

export const getAllCouncil= () => {
    return fetch(`${remoteURL}/councilMembers`)
    .then(result => result.json())
    //waits for response, then parses into json data 
}