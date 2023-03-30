import React from "react";
import { Link } from "react-router-dom";

function Preview(props) {
  const { id, name, country, network, image_thumbnail_path } = props.showData;

  return (
    <div className="preview">
      <img src={image_thumbnail_path} alt={name + " " + "posteri"} />
      <div className="preview-data">
        <h3>{name}</h3>
        <p>
          {country} | {network}
        </p>
        <Link className="detay" to={`/dizi-detay/${id}`}>
          Detay
        </Link>
        <button onClick={() => props.addToList(props.showData)}>
          Listeme Ekle
        </button>
      </div>
    </div>
  );
}

export default Preview;
