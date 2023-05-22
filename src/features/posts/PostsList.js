import { useSelector } from "react-redux";

import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <div className="postCredit">
      <PostAuthor userId={post.userId }/> 
      <TimeAgo timestamp={post.date}/> 
     </div>
     <ReactionButtons post={post} />
      
    </article>
  ));
  return (
    <sections>
      <h2>Posts</h2>
      {renderPosts}
    </sections>
  );
};

export default PostsList;
