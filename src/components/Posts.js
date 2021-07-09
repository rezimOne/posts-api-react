import './Posts.css';
import PostItem from './PostItem';
import React, {useEffect, useState} from "react";

function Posts(){
  const [users, setUsers] = useState([]);
  //useState pusta tablica ussers (poniej na niej robimy map())
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const apiURL = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setUsers(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="user-list">*_* POSTY *_*{users.map((item, index) => (
        <PostItem key={index}
          name  = {item.name}
          email = {item.email}
          phone = {item.phone}
        ></PostItem>
      ))}
      </div>
    );
  }
}

export default Posts;