import React from "react";
import getStil from "./AddFilm.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function AddFilm(props) {
  const { box, button, nameInput, imageInput, ekleButton } = getStil;
  const [form, setForm] = useState({
    name: "",
    image_thumbnail_path: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setForm({
      ...form,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addNewFilm({
      ...form,
      id: Date.now(),
    });
  }
  //TODO goBack ile hata veiyor geri gitmiyor
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <div className={box}>
      <h1>Dizi Ekle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Film Adı:
            <input
              className={nameInput}
              id="name"
              value={form.name}
              onChange={handleChange}
              type="text"
            ></input>
          </label>
        </div>
      </form>
      <form>
        <div>
          <label htmlFor="image_thumbnail_path">
            Film Posteri Url :
            <input
              className={imageInput}
              id="image_thumbnail_path"
              value={form.image_thumbnail_path}
              type="text"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className={button}>
          <button className={ekleButton} type="submit">
            Ekle
          </button>
          <button onClick={handleClick}>Geri Dön</button>
        </div>
      </form>
    </div>
  );
}

export default AddFilm;
