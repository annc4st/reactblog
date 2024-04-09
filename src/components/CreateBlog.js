import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, imageUrl };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog");
      setIsPending(false);
      // navigate(-1) return to previous page
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="text">Blog text:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
         <label htmlFor="article_img_url"> Image url: </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="author">Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value=''>Choose author name</option>
          <option value="grumpy19">grumpy19</option>
          <option value="tickle122">tickle122</option>
          <option value="jessjelly">jessjelly</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="sophiaR">sophiaR</option>
        </select>

       

        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && (
          <button disabled type="submit">
            Adding...
          </button>
        )}

      </form>
    </div>
  );
};

export default CreateBlog;
