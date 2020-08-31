import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

interface playlistItem{
    title: string;
    thumbnail: string;
    videoId: string;
    playlistId: string;
}

const Playlists = () =>{
    const [playlists, setPlaylists] = useState<playlistItem[]>([])
    const {genreName} = useParams()

    useEffect(()=>{
        api.get<playlistItem[]>(`playlists?search=${genreName}+music&nresults=8`).then(response =>{
            setPlaylists(response.data)
        })
    },[])

    return(
        <div>
            <p>{genreName}</p>
            {playlists&&
            playlists.map((playlist)=>{
                return (
                    <Link key={playlist.title} to={`../playlist/${playlist.playlistId}/${playlist.videoId}`}>
                        <img src={playlist.thumbnail} alt="Capa da playlist" className="thumb"/>
                        <p key={playlist.title}>{playlist.title}</p>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default Playlists