import BlogItem from '../BlogItem'

const BlogList = ({blogsList}) => {
  console.log(blogsList)
  return (
    <ul>
      {blogsList.map(eachBlog => {
        const {id} = eachBlog
        return <BlogItem key={id} blog={eachBlog} />
      })}
    </ul>
  )
}

export default BlogList
