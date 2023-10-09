// Please read the README.md to understand what to do. Happy Coding !

async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const usersData = await response.json();
  
     
      function modifyUsers(user){
       const newData= {Name : user.name,
        Username:user.username,
        Email: user.email,
        Address:user.address.street,
        Phone:user.phone,
        Website : user.website,
        Company : user.company.name,
        }
        return newData;

      }

      const modifiedUserData = usersData.map(modifyUsers)
  
  
     
      const filteredUserData = modifiedUserData.filter((user) =>
        user.Email.endsWith('.biz')
      );
  
     
      filteredUserData.sort((a, b) => a.Name.localeCompare(b.Name));
  
      
      console.log('Modified User Data:', modifiedUserData);
  
      
      console.log('Filtered User Data:', filteredUserData);
  
      
      console.log('Sorted User Data:', filteredUserData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  
  fetchUserData();
  