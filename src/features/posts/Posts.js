import { useSelector } from "react-redux";
import { postsSelector } from "./postsSlice";
import { useDispatch } from "react-redux";
import { fetchPopularPosts } from "./postsSlice";
import { useEffect } from "react";
import './Posts.css';
import { Info } from "../info/Info";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  const postsList = Object.values(posts).map(post => {
    console.log(post);
    return (
      <li key={post.id}>
        <h5>{post.subreddit} - {post.created_at}</h5>
        <h2>
          {post.title}
        </h2>
        <div>
          {post.image_url !== 'self' && <img src={post.image_url} className="preview"/>}
        </div>
        <p>
          {post.text}
        </p>
        <Info upvotes={post.upvotes} downvotes={post.downvotes} className="votes"></Info>        
        <hr/>
      </li>
    )
  });

  return (
    <div className="posts">
      <ul>
        {postsList}
      </ul>
    </div>
  )
}