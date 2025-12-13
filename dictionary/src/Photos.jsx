import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos container">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt={photo.src.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
