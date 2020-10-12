import axios from "axios";


// create exported class to retturn all users 
// with axios i can access this rest api and 
// get all data into 
// put what about params and why i set limit 1000
// because i have no access on this api so i have to
// use limit 🛩
//
export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};
