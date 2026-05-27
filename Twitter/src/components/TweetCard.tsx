import { api } from "../services/api";
import type { Tweet } from "../types";

export function TweetCard({ tweet, onRefresh }: { tweet: Tweet; onRefresh: () => void }) {
  const toggleLike = async () => {
    try {
      await api.post(`/tweets/${tweet.id}/like`);
    } catch {
      await api.delete(`/tweets/${tweet.id}/like`);
    }
    onRefresh();
  };

  return (
    <article className="tweet-card">
      <p>
        <strong>@{tweet.autor?.username ?? "user"}</strong>
      </p>
      <p>{tweet.conteudo}</p>
      {tweet.imagem_url && <img src={`${import.meta.env.VITE_API_ORIGIN || "http://localhost:3000"}${tweet.imagem_url}`} alt="tweet" />}
      <div className="tweet-actions">
        <button onClick={toggleLike}>Like ({tweet.likes?.length ?? 0})</button>
        <span>Comentários: {tweet.comments?.length ?? 0}</span>
      </div>
    </article>
  );
}
