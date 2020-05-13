import React from "react";
import { Link } from "react-router-dom";

//Assets
import "./styles/BlogItem.css";

class BlogItem extends React.Component {
  render() {
    const blog = this.props.blogs;

    return (
      <div className="row">
        <Link
          className="ListBlogs__Link text-reset text-decoration-none col-12"
          to={`/blog/${blog.id}`}
        >
          <div className="BlogItem">
            <div className="row">
              <div className="col-4">
                <img
                  className="BlogItem__imagen"
                  src={blog.portada}
                  alt={this.props.blogs.titulo}
                />
              </div>
              <div className="col-8 mt-3">
                <h2 className="BlogItem__titulo">{this.props.blogs.titulo}</h2>
                <span className="BlogItem__fecha">
                  {this.props.blogs.fecha}
                </span>
                <hr />
                <p>{this.props.blogs.contenido}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BlogItem;
