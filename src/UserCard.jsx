import { use, useState } from "react";
import { useEffect } from "react";

function UserCard({ user, onDelete }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("likes:", likes);
    if (likes === 10) alert("Du har fået 10 likes!");
  }, [likes]);

  return (
    <div className="user-card">
      <img src={user.image} />
      <h2>{user.name}</h2>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Skjul" : "Vis"} detaljer
      </button>
      {showDetails && (
        <div>
          {
            <>
              <p>Mail: {user.mail}</p>
              <p>Title: {user.title}</p>
              <p>ID: {user.id}</p>
              <button onClick={() => setLikes(likes + 1)}>Like</button>
              <button onClick={() => setLikes(0)}>Reset likes</button>
              <p>Likes: {likes}</p>
              <button onClick={() => onDelete(user.id)}>Slet</button>
            </>
          }
        </div>
      )}
    </div>
  );
}
export default UserCard;
