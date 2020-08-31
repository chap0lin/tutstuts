import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../services/api'
import axios from 'axios'

import './styles.css'
import { url } from 'inspector'

interface SongFromYoutubeAPI{
    title: string;
    thumbnail: string;
    url: string;
}

const Song = () =>{
    const [song, setSong] = useState<SongFromYoutubeAPI[]>()
    const {songTitle} = useParams()

    useEffect(()=>{
        api.get<SongFromYoutubeAPI[]>(`videos?search=${songTitle}`).then(response =>{
            setSong(response.data)
        })
    },[])

    

    return(
        <div>
            <p>QUe LOUCURA {songTitle}</p>
            {song&&
            <>
                <h1>{song[0].title}</h1>
                <h2>{song[0].thumbnail}</h2>
                <img src={song[0].thumbnail} alt="Capa da musica"/>
                <iframe id="ytplayer" width="640" height="360" src={song[0].url}
                frameBorder="0"
                />
            </>
            }
            
        </div>
    )
}
export default Song