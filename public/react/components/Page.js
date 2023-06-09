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

  const deletePage = async () => {
    const response = await fetch(`${apiURL}/wiki/${title}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };



  return (
    <div>
      <h2>{title}</h2>
      <p><strong>Author</strong> :{name} </p> <br />
      <p><strong>Published</strong> {new Date(createdAt).toLocaleDateString()}</p> <br />
      <p><strong>Tags</strong>  :{content}</p> <br />
      <button onClick={onBack}>Back to Wiki List</button>
      <button
        onClick={() => {
          deletePage();

        }}
      >
        DELETE
      </button>
    </div>
  );
};
