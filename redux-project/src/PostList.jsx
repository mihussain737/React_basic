import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions/postAction";

const PostList=() =>{

     const dispatch = useDispatch();
     const {posts, loading ,error}= useSelector((state)=> state.posts);

     useEffect( ()=>{
          dispatch(fetchPosts());
     },[dispatch]);

     return(
          <div>

          </div>
     )
};

export default PostList;