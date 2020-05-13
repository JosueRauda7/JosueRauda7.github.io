import React from "react";

//assets
import "./styles/ListBlogs.css";

//Components
import BlogItem from "./BlogItem";

class ListBlogs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ListBlogs">
          {this.props.blogs.map((blog) => {
            return (
              <div className="mb-4">
                  <BlogItem key={blog.id} blogs={blog} />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ListBlogs;
