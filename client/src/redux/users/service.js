const addUser = async (name) => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(name)
  });

  return response.json();
};

const getUsers = async () => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'GET'
  });
  return response.json();
};

export default {
  addUser,
  getUsers
};
