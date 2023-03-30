import React from "react";
import stil from "./smallPreview.module.css";

function SmallPreview(props) {
  const { name, id, image_thumbnail_path, country, network } = props.dizi;
  const { box, body, button } = stil;
  return (
    <div>
      <div className={box} key={id}>
        <img src={image_thumbnail_path} alt="" />
        <div className={body}>
          <h4>{name}</h4>
          <div>
            {country} & {network}
          </div>
          <button className={button} onClick={() => props.removeFromList(name)}>
            Çıkar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallPreview;
