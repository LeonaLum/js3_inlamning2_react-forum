import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Post = (props) => {

  let { id } = useParams();
  const [postDetails, setPostDetails] = useState();
  const [comment, setComment] = useState();

  let obj = {};

  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then((res) => { const responsePosts = res.data;
    //   setPostDetails(responsePosts);
    // });
    axios.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
               axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
              ])
              .then(axios.spread(({data: posts}, {data: comments}) => {
                setPostDetails(posts)
                setComment(comments)
              }))
  }, []);

  const { userId, id:postId, title, body} = postDetails || {};
  console.log(obj)

  return (  
   <>
    { postDetails || comment ? ( 
      
        <div className="detail">
          <h2><span className="bold">{title[0]}</span>{title.substring(1)}</h2>
          <p className="post-text">{body}</p>
        <ul className="comment-box">
          <h3>Kommentarer</h3>
            {comment.map(({id:Cid, name, email, body:Cbody }) => {
                return (
                <li className="comment" key={Cid}>
                  <p className="comment-text">{Cbody}</p>
                <footer className="comment-footer">
                  <p><span className="spec">Skriven av:</span>
                  <span className="pic"></span> {name}</p>
                  <p><span className="spec">Email:</span> {email}</p>
                </footer>
                </li>
                )
            })}
        </ul>
        </div>
        ) : 
        ( <h1>No data</h1>)
    }
   </>
  );
}
 
export default Post;