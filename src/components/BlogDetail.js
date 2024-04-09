import { useParams} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail = () => {
    const { id } = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);


  return (
    <div className='blog-detail'>

    {isPending  && <div>Loading...</div>}
    {error && <div>Error..</div>}
    
    
    {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>
                <img src={blog.article_img_url} alt='article {blog.title}' />
            </div>
            <div>
            <p></p>
            {blog.body}</div>
        </article>

    )}
      
    </div>
  )
}

export default BlogDetail
