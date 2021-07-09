import './Posts.css';
import PostItem from './PostItem';
import React, {useEffect, useState} from "react";

function Posts(){
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  //useState pusta tablica ussers (poniej na niej robimy map())
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const apiURL_users = "https://jsonplaceholder.typicode.com/users";
  const apiURL_posts = "https://jsonplaceholder.typicode.com/posts";


  useEffect(() => {
    fetch(apiURL_posts)
    .then(response => response.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setPosts(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])

  useEffect(() => {
    fetch(apiURL_users)
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
      <div className="user-list">POSTY{posts.map((item, index) => (
        <PostItem key={index}
          title  = {item.title}
          body = {item.body}
        ></PostItem>
      ))}
      </div>
    );
  }


}

export default Posts;