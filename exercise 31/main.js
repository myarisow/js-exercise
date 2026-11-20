
async function fetchUsers() {
  

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log("List of users:", users );
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Call the function
fetchUsers();
