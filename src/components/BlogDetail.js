import { useParams} from 'react-router-dom'
import useFetch from './useFetch'
import {useNavigate} from 'react-router-dom'

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' +blog.id, {
            method: 'DELETE'
        }).then(() => {

        })
        navigate('/')
    }


  return (
    <div className='blog-detail'>

    {isPending  && <div>Loading...</div>}
    {error && <div>Error..</div>}
    
    
    {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>
                <img src={blog.imageUrl} alt='article {blog.title}' />
            </div>
            <div>
           
            {blog.body}</div>

            <button onClick={handleDelete}>Delete</button>
        </article>

    )}
      
    </div>
  )
}

export default BlogDetail
