import { useState } from "react";
import Loading from "./components/Loading";
import "./App.css";
import PostCard from "./components/PostCard";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError("Something went wrong. Please refresh the page.");
    }
  };

  fetchPosts();

  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-100">
      <div className="flex flex-col items-center justify-center">
        <Title text="Hey, it's good to see you" />
        <Subtitle text="I will show some of my skills" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Title text="Here some posts and images" />
        <Subtitle text="They are consumed from two different APIs" />
      </div>

      {!error && posts.length > 0 && (
        <div className="grid items-start content-center grid-cols-1 gap-8 mt-8 max-w-3/4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <PostCard
              key={post.title}
              image={"https://source.unsplash.com/random/500x200/?work"}
              title={post.title}
              description={post.body}
            />
          ))}
        </div>
      )}

      {!error && !posts.length && (
        <div className="w-2/4 my-4 mt-20">
          <Loading />
        </div>
      )}

      {error && <ErrorMessage error="Something went wrong, please refresh." />}
    </div>
  );
}

export default App;
