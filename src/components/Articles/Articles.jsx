import folder from "../../assets/icons8-folder-32.png";
import "./article.css";
function Articles() {
  return (
    <div className="article-content container">
      <div className="title">
        <img src={folder} alt="" />
        <h2>Articles</h2>
      </div>

      <div className="contents">
        <div className="content">
          <h2>SOON !!!</h2>
        </div>
      </div>
    </div>
  );
}
export default Articles;
