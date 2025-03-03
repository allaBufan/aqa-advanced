async function getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Fetches todo object from edpoint
      if (!response.ok) {
        throw new Error('Request failed'); // Catches error if request failed
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error); // Handles the error if it's there
      throw error;
    }
  }

  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); // Fetches user object from edpoint
      if (!response.ok) {
        throw new Error('Request failed'); // Catches error if request failed
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error); // Handles the error if it's there
      throw error;
    }
  }
  
  async function fetchDataAll() {
    try{
      const result = await Promise.all([getTodo(), getUser()]);
      console.log('All data here:', result);
    } catch(error){
      console.log(error.message)
    }
  }

  async function fetchDataRace() {
    try{
      const result = await Promise.race([getTodo(), getUser()]);
      console.log('And the winner iiiiiis:', result);
    } catch(error){
      console.log(error.message)
    }
  }

  fetchDataAll();
  fetchDataRace()
