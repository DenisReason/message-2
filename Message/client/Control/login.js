import axios from "axios"
const url = 'https://message-denis-b604c8e87239.herokuapp.com/login'
const url2 = "http://localhost:3000/login"

export const handleLogin = async (data)=> {
    await axios.post(url,data)
      .then(Response => {
        console.log(Response.data);
      }).catch(err => {
        console.log(err);
      })
  }