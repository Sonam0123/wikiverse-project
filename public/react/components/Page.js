import React, {useState, useEffect} from 'react';
import apiURL from '../api';

export const Page = ({page, onBack}) => {
  const { title, content, createdAt, authorId } = page;
  const [user , setUser] = useState({});

  async function fetchUser(){
    try {
      const response = await fetch(`${apiURL}/users/${authorId}`);
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      console.log("Oh no an error! ", err)
    }
  }

  const { name } = user;


  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <div>
      <h2>{title}</h2>
      <p><strong>Author</strong> :{name} </p> <br />
      <p><strong>Published</strong> {createdAt}</p> <br />
      <p><strong>Tags</strong>  :{content}</p> <br />
      <button onClick={onBack}>Back to Wiki List</button>
    </div>
  );
};
