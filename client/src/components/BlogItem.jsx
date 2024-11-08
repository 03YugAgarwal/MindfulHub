import { useNavigate } from "react-router-dom"

import "../styles/BlogItem.css"

const BlogItem = (props) => {

  const navigate = useNavigate()

  const handleBlog = () => {
    navigate('/blog/' + props.id)
  }

  return (
    <div onClick={handleBlog} className="blogItem" >
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <h5>{props.author}</h5>
      <hr />
    </div>
  )
}

export default BlogItem