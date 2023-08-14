import { useState } from "react";
import { AccessibilityNewOutlined } from "@mui/icons-material";
import Loading from "./components/Loading";
import "./App.css";
import PostCard from "./components/PostCard";

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
        <span className="block mt-4 text-3xl">
          Hey, this{" "}
          <AccessibilityNewOutlined className="text-green-700 text-7xl" /> is me
        </span>
        <span className="block text-neutral-500">
          I'm waiting for you to hire me
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="block mt-4 text-3xl">Here some posts and images</span>
        <span className="block text-neutral-500">
          They are consumed from two different APIs
        </span>
      </div>

      {!error && posts.length > 0 && (
        <div className="grid items-start content-center grid-cols-1 gap-2 mt-8 max-w-3/4 md:grid-cols-2 lg:grid-cols-3">
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

      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}

export default App;
