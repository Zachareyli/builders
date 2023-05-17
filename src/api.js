// import { useState, useEffect } from "react";

// function Api() {

//   const [anime, setAnime] = useState([]);
//   const url ='https://anime-facts-rest-api.herokuapp.com/api/v1'

// const apiGet= () =>{
//   fetch(url)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   setAnime(json);
// });
// }

// useEffect(() =>(
//   apiGet()
// ),[]);


// const newArray = anime.data;
// console.log(newArray)

// return(
//   <>
//   {newArray && newArray.map(({anime_id, anime_name, anime_img}) =>(
//     <div key={anime_id} className="center">
//     <h2>Anime name is {anime_name}<br></br>
//     <img className='img' src={anime_img} alt={anime_name} />
//     </h2></div>
//   ))}
//   <div>
//   {anime.data ? <h1>{anime.data[0].anime_name}</h1>: null}
//   </div>
//   </>
//   )
// }

// export default Api;
