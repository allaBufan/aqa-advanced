export function getTodo() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1') // Fetches toto object from edpoint
            .then(response => {
                if (!response.ok) {
                    reject('Failed to fetch todo'); // Rejects if failed
                } else {
                    return response.json(); // Returns result in json
                }
            })
            .then(todo => resolve(todo)) // Processes the promise
            .catch(error => reject(error)); // Handles the error
    });
}

// getTodo()
//     .then(todo => {
//         console.log(todo); // Logs todo object
//     })
//     .catch(error => {
//         console.error('Error:', error); // Handles the error
//     });
