import React,{useState,useEffect} from 'react';
import axios from 'axios'
const App = () => {
    const [username, setUserName] = useState()
    useEffect(() => {
       axios.get('http://localhost:8000/me',{withCredentials: true
       }).then((res)=>{
            console.log(res)
           setUserName(res.data)
        })
    }, []);

    return (
        <div>
          <a href={'http://localhost:8000/auth/discord'}>LOGIN WITH DISCORD</a>
            {username && <h2>{username}</h2>}
            <a href={'http://localhost:8000/logout'}>LOGOUT</a>
        </div>
      );
};

export default App;
