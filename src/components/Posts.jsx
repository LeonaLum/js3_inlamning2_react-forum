import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [posts, setPost] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => { const responsePosts = res.data;
      setPost(responsePosts);
    });
  }, []);

  return ( 
    <ul className="post-list">
    {
      posts && posts.map((post) => {
        return <li className="post" key={post.id}>
          <Link to={`/post/${post.id}`} >
            <h2>{post.title}</h2>
          </Link>
        </li>
      })
    }
  </ul>
   );
}
 
export default Home;