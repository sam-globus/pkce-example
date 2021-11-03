// As per https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html

// inMemoryJwt.js
const inMemoryJWTManager = () => {
  let inMemoryJWT = null;

  const getToken = () => inMemoryJWT;

  const setToken = (token) => {
      inMemoryJWT = token;
      return true;
  };

  const ereaseToken = () => {
      inMemoryJWT = null;
      return true;
  }

  return {
      ereaseToken,
      getToken,
      setToken,
  }
};

export default inMemoryJWTManager();