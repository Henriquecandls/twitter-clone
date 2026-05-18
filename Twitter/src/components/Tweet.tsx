import { useState } from 'react'

interface TweetProps {
  id: number;
  message: string;
  img?: string;
  author: string;
  date: string;
  likes?: number;
  follow?: boolean;
  onToggleFollow?: () => void;
}

function Tweet({ id, message, author, date, likes, img, follow, onToggleFollow }: TweetProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes ?? 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div>
      <p>Post by <strong>{author}</strong> — {date}</p>
      <p>{message}</p>
      <p>❤️ {likeCount}</p>
      {img && <img src={img} alt="tweet" />}
      <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
      <button onClick={onToggleFollow}>{follow ? "Unfollow" : "Follow"}</button>
    </div>
  );
}

export default Tweet;