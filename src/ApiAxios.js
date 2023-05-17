/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function ApiAxios() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery(["animeData"], () =>
    axios
      .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
      .then((res) => res.data)
      
  );
    console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "Something went wrong: " + error.message;

  return (
    <>
    {data.data && data.data.map(({anime_id, anime_name, anime_img}) =>(
            <div key={anime_id} className="center">
             <h2>Anime name is {anime_name}<br></br>
             <img className='img' src={anime_img} alt={anime_name} />
            </h2></div>
          ))}
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}