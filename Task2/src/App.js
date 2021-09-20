import React,{useState} from 'react';
import './App.css';

var link=["https://reqres.in/api/users?page=1","https://reqres.in/api/users?page=2"];

var k=0;
const App=()=> {
  const [isLoading, setLoading] = useState(false);
  const[users,setUsers] = useState([]);
  const loadUsers = async() => {
    const response = await fetch(link[k]);
    const jsonresponse = await response.json();
    console.log(jsonresponse)
    setUsers(jsonresponse.data);

    if(k===0){
      k++;
    }else{
      k--;
    }
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1500)
  }

  return (
    <div className="App">
    <div className="heading">
      <header>
           <h1>"Let's  Grow  More"</h1>
            <h3>Task-2</h3>
            {isLoading ? "" :
            (<button onClick={loadUsers}>Get Users</button>)}
      </header>
    </div>
    {isLoading ? <div><h2>Fetching your data</h2>
            <img className="gif" style={{width:"100px", height:"100px"}} src="Loader.gif" alt="" /></div> : 
        <div >
      {users.map((item) => {
            return (
              <div className='grid'>
                <img className="im" src={item.avatar} alt=""></img>
                <div className="data">
                ------
                </div>

                <div className="data">
                  <span>{item.first_name}&nbsp;&nbsp;{item.last_name}</span>
                </div>
                <div className="data">
                ---------
                </div>

                <div className="data">
                  <span>{item.email}</span>
                </div>

                <p></p>

              </div>
            );
          })}
      </div> 
}
    </div>
  );
}
export default App;
