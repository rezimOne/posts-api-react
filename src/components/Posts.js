import './Posts.css';
import PostItem from './PostItem';
import React, {useEffect, useState} from "react";

function Posts(){
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  //useState pusta tablica ussers (poniej na niej robimy map())
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function fetchData(){
    const apiURL_users = "https://jsonplaceholder.typicode.com/users";
    const apiURL_posts = "https://jsonplaceholder.typicode.com/posts";

    Promise.all([
      fetch(apiURL_posts),
      fetch(apiURL_users)
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(
      (result) => {
        setIsLoaded(true);
        setPosts(result[0]);
        setUsers(result[1]);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  useEffect(() => {
    fetchData();
  },[])

  let userPosts = posts.map(post => (
    {
      title: post.title,
      body: post.body,
      ...users.find(user => user.id === post.userId)//
    }
  ));

  if (error) {
    return <div>Error here: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading data...</div>;
  } else {
    return (
      <div>
        <div className="posts-box">{userPosts.map((element, index) => (
          <PostItem key={index}
            name = {element.name}
            title = {element.title}
            body = {element.body}
          ></PostItem>
        ))}
        </div>

      </div>
    );
  }
}

export default Posts;