export function getTodo() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    // Rejects if failed
                    reject('Failed to fetch todo');
                } else {
                    // Returns result in json
                    return response.json();
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
