const addUser = async (name) => {
  const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(name)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};

const getUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/users`, {
    method: 'GET'
  });
  return response.json();
};

export default {
  addUser,
  getUsers
};
