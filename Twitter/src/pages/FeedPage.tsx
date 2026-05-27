import { useCallback, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { TweetCard } from "../components/TweetCard";
import { TweetForm } from "../components/TweetForm";
import { api } from "../services/api";
import type { Tweet } from "../types";

export function FeedPage() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const loadFeed = useCallback(async () => {
    const token = localStorage.getItem("token");
  
    const { data } = await api.get("/feed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    setTweets(data);
  }, []);

  return (
    <Layout>
      <h2>Feed</h2>
      <TweetForm onCreated={loadFeed} />
      <div className="tweet-list">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} onRefresh={loadFeed} />
        ))}
      </div>
    </Layout>
  );
}
