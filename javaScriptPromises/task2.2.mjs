        export function getUser() {
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/users/1') // Fetches user object from edpoint
                    .then(response => {
                        if (!response.ok) {
                            reject('Failed to fetch todo'); // Rejects if failed
                        } else {
                            return response.json(); // Returns result in json
                        }
                    })
                    .then(user => resolve(user)) // Processes the promise
                    .catch(error => reject(error)); // Handles the error
            });
        }
        
        // getUser()
        //     .then(user => {
        //         console.log(user); // Logs user object
        //     })
        //     .catch(error => {
        //         console.error('Error:', error); // Handles the error
        //     });