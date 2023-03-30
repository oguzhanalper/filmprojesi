import React from "react";
//TODO Hüsran!!
const Arama = (props) => {
  const [arama, setArama] = props;
  const handleSearch = (event) => {
    setArama(event.target.value);
  };
  let arananDizi = shows.filter((diziObj) => {
    if (tv_shows.name[0].text === "") {
      return shows;
    } else if (shows.name[0].text.toLowerCase().includes(arama.toLowerCase())) {
      return shows;
    }
  });
  return (
    <div>
      <div>
        {arananDizi.length > 0 ? (
          arananDizi.map((diziObj) => "")
        ) : (
          <p>Aranılan Dizi bulunamadı</p>
        )}
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Dizi Ara"
          onChange={handleSearch}
          value={arama}
        />
      </form>
    </div>
  );
};

export default Arama;
