// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails

  return (
    <li>
      <div className="blog-title-publish-box">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-publish">{publishedDate}</p>
      </div>
      <p className="blog-publish">{description}</p>
      {id < 5 && <hr className="separator" />}
    </li>
  )
}

export default BlogItem
