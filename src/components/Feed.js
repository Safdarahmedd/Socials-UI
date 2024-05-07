// App.js
import React from 'react';
import './styles/Feed.css';

const dummyTimeline = [
  {
    ID: 1,
    Username: "user1",
    Image: "https://picsum.photos/200",
    Caption: "This is the first post",
    Likes: [{ Username: "user2" }, { Username: "user3" }],
    Comments: [{ Username: "user4", Message: "Nice post!" }, { Username: "user5", Message: "Great picture!" }]
  },
  {
    ID: 2,
    Username: "user2",
    Image: "https://picsum.photos/200",
    Caption: "This is the second post",
    Likes: [{ Username: "user1" }, { Username: "user3" }],
    Comments: [{ Username: "user3", Message: "Cool!" }, { Username: "user4", Message: "Awesome shot!" }]
  },
  {
    ID: 3,
    Username: "user3",
    Image: "https://picsum.photos/200",
    Caption: "This is the third post",
    Likes: [{ Username: "user1" }, { Username: "user2" }],
    Comments: [{ Username: "user1", Message: "Love it!" }, { Username: "user2", Message: "Fantastic!" }]
  }
];

function Feed() {
  const handleLike = (postId) => {
    // Implement like functionality
    console.log(`Liked post with ID: ${postId}`);
  };

  const renderComments = (comments) => {
    return comments.map(comment => (
      <div key={comment.Username} className="Comment">
        <strong>{comment.Username}:</strong> {comment.Message}
      </div>
    ));
  };

  return (
    <div className="App">
      <div className="Header">
        <img src="socials-logo-2.png" alt="Instagram" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="Posts">
        {dummyTimeline.map(post => (
          <div key={post.ID} className="Post">
            <img src={post.Image} alt="post" />
            <div className="Interactions">
              <button className="LikeButton" onClick={() => handleLike(post.ID)}>Like</button>
              <div className="Likes">{post.Likes.length} likes</div>
            </div>
            <div className="Caption">{post.Caption}</div>
            <div className="Comments">
              {renderComments(post.Comments)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;