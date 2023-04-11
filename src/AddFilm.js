import React from "react";
import getStil from "./AddFilm.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Flip, Zoom, Bounce, Slide } from "react-toastify";

function AddFilm(props) {
  const { box, button, addButton, nameInput, imageInput, ekleButton } = getStil;
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

    toast("Filminiz başarıyla eklendi", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
    setTimeout(() => history.push("/"), 2000);
  }

  const history = useHistory();
  function handleClick() {
    history.goBack();
  }

  return (
    <div className={box}>
      <h1>Dizi Ekle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Film Adı: Dizi Ekle{" "}
            <input
              className={nameInput}
              id="name"
              value={form.name}
              onChange={handleChange}
              type="text"
            ></input>
          </label>
        </div>

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
          <button id="add" className={addButton} type="submit">
            Ekle
          </button>
        </div>
      </form>

      <div className={button}>
        <button onClick={handleClick}>Geri Dön</button>
      </div>
    </div>
  );
}

export default AddFilm;
