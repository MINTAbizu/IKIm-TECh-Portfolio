import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../project/project.css';
import '../../Component/style.css'

function Project({ image, title }) {
  return (
    <div className="site-section" id="work-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 projectcard">
            <a href="./hero_1.jpg" className="media-1" data-fancybox="gallery">
              <img src={image} alt={title} className="img-fluid" />
              <div className="media-1-content">
                <h2 className="h5">{title}</h2>
                {/* <p>{description}</p> */}
                <h2 className="h6">View</h2>
                <span className="category">Details</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;