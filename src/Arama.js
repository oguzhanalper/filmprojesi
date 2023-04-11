// import React from "react"; //TODO

// const Arama = (props) => {
//   const { arama, setArama, tv_shows } = props;
//   const handleSearch = (event) => {
//     setArama(event.target.value);
//   };
//   let arananDizi = tv_shows.filter((diziObj) => {
//     return diziObj.name.toLowerCase().includes(arama.toLowerCase());
//   });

//   return (
//     <div>
//       <div>
//         {arananDizi.length > 0 ? (
//           arananDizi.map((diziObj) => <p key={diziObj.id}>{diziObj.name}</p>)
//         ) : (
//           <p>Aranılan Dizi bulunamadı</p>
//         )}
//       </div>

//       <form className="search-form">
//         <input
//           type="text"
//           placeholder="Dizi Ara"
//           onChange={handleSearch}
//           value={arama}
//         />
//       </form>
//     </div>
//   );
// };

// export default Arama;
