import './index.css'

const BlogItem = ({blog}) => {
  const {title, description, publishedDate} = blog
  return (
    <li className="list-cont">
      <div>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
