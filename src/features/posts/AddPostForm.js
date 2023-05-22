import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [userId,SetUserId]=useState();

  const dispatch=useDispatch();
  const user=useSelector(selectAllUsers)


  //console.log("users"+user[1].name)

  const canSave=Boolean(title)&&Boolean(content)&&Boolean(userId)

  const usersOptions=user.map(item=>(
     
      <option value={item.id} key={item.id}>{item.name}</option>
     
  ))

  // function onTitleChanged(event) {
  //   setData(event.target.value);
  // }

  const onTitleChanged=(e)=>setTitle(e.target.value)

  // function onContentChanged(event) {
  //   setContent(event.target.value);
  // }

  const onContentChanged=(e)=>setContent(e.target.value)
  const onAuthorChanged=(e)=>SetUserId(e.target.value)

  console.log({ title });
  console.log({ content });

  const onSavePostClicked = () => {
    if (title && content) {
        dispatch(
            postAdded(title, content, userId)
        )
        setTitle('')
        setContent('')
    }
}

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" id="postTitle" name="postTitle"  value={title} onChange={onTitleChanged}></input>


        

        <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
        <textarea type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged}></textarea>

        <button type="button" disabled={!canSave} onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
