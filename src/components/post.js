import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://7y6v9n-8080.csb.app/api/posts/" + slug
        );
        const result = await response.json();
        setPost(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const { title, description, category } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
}
export default Post;
