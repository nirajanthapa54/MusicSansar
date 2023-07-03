import './SearchBar.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const Search=()=> {
  
    
    const [users, setUser] = useState([]);
    const [query,setQuery]= useState("");
    console.log(query)

    useEffect(() => {
      loadUsers();
    }, []);
  //loading  all College and university Data from usa but it take 2 3 sec to load data in home page because of 
  //high volume
    const loadUsers = async () => {
      const result = await axios.get("http://universities.hipolabs.com/search?country=United+States");
     
      setUser(result.data);
  
    };
    
  
  
    return (
    
          <>
          <center>
          <div>
           <h3>Here you can search a College and university of america and get their website and domain 
            to see details</h3> <br/>
            
          </div>
          <div className='input-wrapper'>
<FaSearch id="search-icon"/>
          <input type="text" placeholder='Search here ....' className='search' 
            onChange={e=>setQuery(e.target.value)}
          />
           </div>
           <br/>
            <table border={1}>
              <tr>
              <th>id</th>
                <th>Name</th>
                <th>website</th>
                <th>Domain</th>
              </tr>
              {users.filter((user)=>user.name.toLowerCase().includes(query)).map(user => (
                <tr key={user.Arrays}>
                <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.web_pages}</td>
                  <td>{user.domains}</td>
                </tr>
              ))}
            </table>
           
            </center>
          </>
         
    )
        }
  
     
  export default Search;