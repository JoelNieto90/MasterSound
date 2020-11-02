import { useState, useEffect } from 'react';


export function useFetchAlbum (url) {
  
  const [album, setAlbum] = useState([]);


  async function fetchAlbum (url) {
    const response = await fetch(url);
    const data = await response.json();
    setAlbum(data)
  }

  useEffect (() => {
    fetchAlbum(url);
  }, [])


  return album
}

