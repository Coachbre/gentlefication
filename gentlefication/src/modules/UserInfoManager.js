//fetches each users information

const remoteURL = "http://localhost:8088"

export const getUserId = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then(result => result.json())
}