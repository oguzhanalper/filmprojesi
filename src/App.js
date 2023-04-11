import axios from "axios";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import SmallPreview from "./SmallPreview";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./Details";
import AddFilm from "./AddFilm";
//TODO import Arama from "./Arama";
import { toast } from "react-toastify";
import { Flip, Zoom, Bounce, Slide } from "react-toastify";

function App() {
  const showObj = {
    id: 23455,
    name: "Game of Thrones",
    permalink: "game-of-thrones",
    start_date: "2011-04-17",
    end_date: null,
    country: "US",
    network: "HBO",
    status: "Ended",
    image_thumbnail_path:
      "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
  };

  const [shows, setShows] = useState([]);
  const [current, setCurrent] = useState(null);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  //TODO const [arama, setArama] = useState("");
  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        setShows(response.data.tv_shows);
        //? setWatchList(response.data.tv_shows.slice(0, 4));
      })
      .catch((error) => console.log("hata", error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/most-popular?page=${page}`)
      .then((response) => {
        setShows(response.data.tv_shows);
      })
      .catch((error) => console.log("hata", error));
  }, [page]);

  function handleAdd(diziObj) {
    if (watchList.find((dizi) => dizi.id === diziObj.id)) {
      toast("Seçilen Dizi Listede Var", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      });
    } else {
      setWatchList([...watchList, diziObj]);
    }
  }
  function handleRemove(name) {
    const yeniListe = watchList.filter((dizi) => dizi.name !== name);
    setWatchList(yeniListe);
  }

  function changePage(newNumber) {
    if (newNumber > 0) {
      setPage(newNumber);
    }
  }

  function handleAddNewFilm(diziObj) {
    setWatchList([...watchList, diziObj]);
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className="mainContent">
          <div className="show-list">
            <h2>Popüler Diziler</h2>
            <div className="addShowList">
              {/* <Arama setArama={setArama} arama={arama} /> */}//TODO
              <Link className="diziEkle" to="/dizi-ekle">
                Dizi Ekle
              </Link>
            </div>
            <div className="scroll-list">
              <ul>
                {shows.map((dizi) => (
                  <li
                    key={dizi.id}
                    onClick={() => setCurrent(dizi)}
                    className={current?.id === dizi.id ? "active" : ""} //*{current !== null && current.id ===dizi.id}
                  >
                    {dizi.name}
                  </li>
                ))}
              </ul>
              <div className="page-nav">
                <button
                  onClick={() => changePage(page - 1)}
                  disabled={page === 1}
                >
                  Önceki
                </button>
                <span>{page}</span>
                <button onClick={() => changePage(page + 1)}>Sonraki</button>
              </div>
            </div>
          </div>
          <div className="show-detail">
            {current === null ? (
              <div className="noShow">
                Lütfen "Popüler Dizi" sekmesinden bu bölüme bir dizi ekleyin
              </div>
            ) : (
              <Preview showData={current} addToList={handleAdd} />
            )}
          </div>
          <div className="watch-list">
            <h2>İzleyeceklerim</h2>
            <div className="scroll-list">
              {watchList.map((dizi) => (
                <SmallPreview
                  key={dizi.id}
                  removeFromList={handleRemove}
                  dizi={dizi}
                />
              ))}
            </div>
          </div>
        </div>
      </Route>
      <Route path="/dizi-detay/:showId">
        <Details />
      </Route>
      <Route path="/dizi-ekle">
        <AddFilm addNewFilm={handleAddNewFilm} />
      </Route>
    </Switch>
  );
}

export default App;
