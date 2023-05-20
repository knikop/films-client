/**
 * Create the actor 
 * @param {*} actorData The actor that we are trying to create
 * @returns 
 */
async function createActor(actorData) {
    const uri = 'https://localhost/films-api/actors';

    //The type of data that we want to receive(JSON)
    const reqHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    //The type of request being sent
    const request = new Request(uri, {
        method: 'POST',
        headers: reqHeaders,
        body: JSON.stringify(actorData)
    });

    //The response we are waiting for
    const response = await fetch(request);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to create actor');
    }
}

/**
 * The Actor's data that we are trying to create
 */
const actorData = {
    name: 'Johnathan Doyle',
    age: 35,
    gender: 'Male',
};

/**
 * Decides whether the actor was created or if an error occured
 */
createActor(actorData)
    .then(data => {
        console.log('Actor created:', data);
    })
    .catch(error => {
        console.error('Error creating actor:', error);
    });