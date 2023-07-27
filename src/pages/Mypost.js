import React, { useEffect, useState } from "react";
import { getDocs, doc,deleteDoc, collection, query, where } from "firebase/firestore";
import { db, auth } from "../firebase-config";

function Mypost(isAuth) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const currentUserID = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const getPosts = async () => {
      // Check if the user is logged in and has a UID
      if (currentUserID) {
        // Create a query to get only the posts of the current user
        const q = query(
          postsCollectionRef,
          where("author.id", "==", currentUserID)
        );
        const data = await getDocs(q);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };
    getPosts();
  }, [currentUserID]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts",id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div key={post.id} className="post">
            <img
              src={post.Imgurl}
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Post"
            />
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id===auth.currentUser.uid &&(
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  {" "}
                  &#128465;{" "}
                </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Mypost;
