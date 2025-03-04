import {getTodo} from './task2.1.mjs'
import {getUser} from './task2.2.mjs'

Promise.all([getTodo(), getUser()]) // Returns all promises results
  .then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error with Promise.all:', error);
  });


Promise.race([getTodo(), getUser()]) // Returns the first processed promise results
    .then(result => {
        console.log('And the winner iiiiiis:', result);
    })
    .catch(error => {
        console.error('Error with Promise.race:', error);
    });

