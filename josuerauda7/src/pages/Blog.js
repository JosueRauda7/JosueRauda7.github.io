import React from "react";
import { Link } from "react-router-dom";

//assets
import BlogsDB from "../server/db-blogs.json";
import "./styles/Blog.css";

//components
import ListBlogs from "../components/ListBlogs";

class Blog extends React.Component {
  state = {
    ...BlogsDB,
    titulo: "",
    contenido: "",
    imagesUrl: [],
  };

  render() {
    return (
      <React.Fragment>
        <div className="BlogMenuCategories col-lg-12">
          <div className="row">
            <Link className="text-reset text-decoration-none" to="/">
              <div className="BlogMenuCategories__Opcion ml-5">Cristianismo</div>
            </Link>
            <Link className="text-reset text-decoration-none ml-5" to="/">
              <div className="BlogMenuCategories__Opcion">Software</div>
            </Link>
            <Link className="text-reset text-decoration-none ml-5" to="/">
              <div className="BlogMenuCategories__Opcion">Matemática</div>
            </Link>
            <Link className="text-reset text-decoration-none ml-5" to="/">
              <div className="BlogMenuCategories__Opcion">Física</div>
            </Link>
            <Link className="text-reset text-decoration-none ml-5" to="/">
              <div className="BlogMenuCategories__Opcion">Diseño</div>
            </Link>
            <Link className="text-reset text-decoration-none ml-5" to="/">
              <div className="BlogMenuCategories__Opcion">Producción</div>
            </Link>
          </div>
        </div>
        <div className="container-fluid">
          <div className="mt-5 row">
            <div className="col-3">
              <hr />
              <h1>Filtro</h1>
            </div>
            <div className="col-9">
              <h1>Publicaciones</h1>
              <br />
              <ListBlogs blogs={this.state.blogs} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
