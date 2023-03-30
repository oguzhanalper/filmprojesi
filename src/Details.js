import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import stiller from "./Details.module.css";

function Details(props) {
  const { boxes, body, rating, img, imgDiv, text, description, button } =
    stiller;

  let { showId } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.episodate.com/api/show-details?q=
      ${showId}`
      )
      .then((response) => setShow(response.data.tvShow))
      .catch((error) => console.log("hata", error));
  });

  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <div className={boxes}>
      {show ? (
        <div className={body}>
          <div className={imgDiv}>
            <img className={img} src={show.image_path} />
          </div>
          <div className={text}>
            <h1>{show.name}</h1>
          </div>
          <div className={rating}>
            <button className={button} onClick={handleBack}>
              Geri Dön
            </button>
            <span>
              <b>Rating:</b> {show.rating}
            </span>
          </div>

          <div className={description}>
            <p>{show.description}</p>
          </div>
        </div>
      ) : (
        "Data Yükleniyor"
      )}
    </div>
  );
}

export default Details;
