import './index.css'

const BlogItem = props => {
  const {blogItemList} = props
  const {title, description, publishedDate} = blogItemList
  return (
    <li className="list">
      <div className="title-date-container">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="paragraph">{description}</p>
    </li>
  )
}
export default BlogItem
