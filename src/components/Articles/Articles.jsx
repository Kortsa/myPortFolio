import folder from "../../assets/icons8-folder-32.png";
import './article.css'
function Articles() {
  return (
    <div className="article-content container">
      <div className="title">
        <img src={folder} alt="" />
        <h2>Articles</h2>
      </div>
    </div>
  )
}
export default Articles;