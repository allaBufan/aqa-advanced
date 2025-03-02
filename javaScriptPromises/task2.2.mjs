        export function getUser() {
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/users/1')
                    .then(response => {
                        if (!response.ok) {
                            // Rejects if failed
                            reject('Failed to fetch todo');
                        } else {
                            // Returns result in json
                            return response.json();
                        }
                    })
                    .then(user => resolve(user)) // Processes the promise
                    .catch(error => reject(error)); // Handles the error
            });
        }
        
        // getUser()
        //     .then(user => {
        //         console.log(user); // Logs todo object
        //     })
        //     .catch(error => {
        //         console.error('Error:', error); // Handles the error
        //     });