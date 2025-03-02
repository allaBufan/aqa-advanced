async function getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }

  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }
  
  async function fetchData() {
    try {
        const todo = await getTodo();
        const user = await getUser();

        console.log('Todo:', todo);
        console.log('User:', user);
    } catch(error) {
        console.error('Error fetching data:', error)
    }
  }

  fetchData();

