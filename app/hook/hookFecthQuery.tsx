// import { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "https://pokeapi.co/api/v2"; // Base URL de l'API Pokémon

// export default function useFetchQuery(endpoint) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}${endpoint}`);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [endpoint]);

//   return { data, isLoading, error };
// }