import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    // custom hook
    const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //as a param we need to pass this endpoint

    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div> Loading.. </div>}
        {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
        {/* blogs &&  >> checks first whether blogs are fetched */}
        {/* <BlogList blogs = {blogs.filter((blog)=> blog.author ==="Mario")} title = "Mario's Blog" /> */}
           
        </div>
     );
}
 
export default Home;