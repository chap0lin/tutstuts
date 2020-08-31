import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

interface songItem{
    title: string;
    thumbnail: string;
    url: string;
}

const Playlist = () =>{
    const [songs, setSongs] = useState<songItem[]>([])
    const {playlistId, videoId} = useParams()

    useEffect(()=>{
        api.get<songItem[]>(`playlist?source=${playlistId}&firstItem=${videoId}`).then(response =>{
            setSongs(response.data)
        })
    },[])

    return(
        <div>
            <p>{playlistId + ' ::::::' + videoId}</p>
            {songs&&
            songs.map((song)=>{
                return (
                    <Link key={song.title} to={`../../song/${song.title}`}>
                        <img src={song.thumbnail} alt="Capa da musica" className="thumb"/>
                        <p key={song.title}>{song.title}</p>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default Playlist