import { useState } from 'react'
import Tweet from './components/Tweet'


const initialTweets: TweetProps[] = [
  { id: 1, message: "Hello World", img: "https://picsum.photos/200", author: "Autor 1", date: "2024-05-18", likes: 12, follow: true },
  { id: 2, message: "Hello World", img: "https://picsum.photos/200", author: "Autor 2", date: "2024-05-18", likes: 8, follow: false },
  { id: 3, message: "Hello World", img: "https://picsum.photos/200", author: "Autor 3", date: "2024-05-18", likes: 20, follow: true },
];

function App() {
  const [tweets, setTweets] = useState(initialTweets);

  const handleToggleFollow = (id: number) => {
    setTweets(tweets.map((t) => t.id === id ? { ...t, follow: !t.follow } : t));
  };

  return (

    <>

      <div className="container">
        <div className="row">
          <div className="col sm">
            <h1>Feed do que estou a seguir</h1>
            {tweets.filter((t) => t.follow===true).map((t) => (
              <div key={t.id}>
                <Tweet {...t} onToggleFollow={() => handleToggleFollow(t.id)} />
                <div style={{ height: '24px' }} />
              </div>
            ))}
          </div>
          <div className="col sm">
            <h1>Feed completo</h1>
            {tweets.map((t) => (
              <div key={t.id}>
                <Tweet {...t} onToggleFollow={() => handleToggleFollow(t.id)} />
                <div style={{ height: '24px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )

}

export default App;