import { useState, useEffect } from 'react';


export function useFetchmusic (spt_album_id) {

  const [music, setMusic] = useState([]);

  const URL = `https://mastersound-backend.azurewebsites.net/api/albums/${spt_album_id}/songs`

  async function fetchMusic () {
    const response = await fetch(URL);
    const data = await response.json();
    setMusic(data)
  }

  useEffect (() => {
    fetchMusic(URL);
  }, [])


  return music
}

