import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

interface genreItem{
    title: string;
    queryName: string;
}

const Genres = () =>{
    const [genreList, setGenreList] = useState<genreItem[]>([])
    
    useEffect(()=>{
        const list=[
            {title:'Energy Boosters', queryName:'energy+boosters'},
            {title:'Commute', queryName:'commute'},
            {title:'Feel Good', queryName:'feel+good'},
            {title:'Focus', queryName:'focus'},
            {title:'Party', queryName:'party'},
            {title:'Chill', queryName:'chill'},
            {title:'Romance', queryName:'romance'},
            {title:'Sleep', queryName:'sleep'},
            {title:'Workout', queryName:'workout'},
            {title:'LGBTQ+', queryName:'lgbtq'},
            {title:'Black Consciousness', queryName:'black+consciousness'},
            {title:'African', queryName:'african'},
            {title:'Arabic', queryName:'arabic'},
            {title:'Asian', queryName:'asian'},
            {title:'Blues', queryName:'blues'},
            {title:'Classical', queryName:'classical'},
            {title:'Country & Americana', queryName:'country+americana'},
            {title:'Christian & Gospel', queryName:'cristian+gospel'},
            {title:'Dance & Eletronic', queryName:'dance+eletronic'},
            {title:'Folk & Traditional', queryName:'folk+traditional'},
            {title:'Forró', queryName:'forro'},
            {title:'Funk BR', queryName:'funk+br'},
            {title:'Hip-Hop', queryName:'hip-hop'},
            {title:'Bollywood & Indian', queryName:'bollywood+indian'},
            {title:'Indie & Alternative', queryName:'indie+alternative'},
            {title:'Jazz', queryName:'jazz'},
            {title:'Kids & Family', queryName:'kids+family'},
            {title:'Latin', queryName:'latin'},
            {title:'Metal', queryName:'metal'},
            {title:'MPB', queryName:'african'},
            {title:'Pop', queryName:'pop'},
            {title:'R&B', queryName:'r+b'},
            {title:'Soul', queryName:'soul'},
            {title:'Reggae', queryName:'reggae'},
            {title:'Rock', queryName:'rock'},
            {title:'Samba & Pagode', queryName:'samba+pagode'},
            {title:'Sertanejo', queryName:'sertanejo'},
            {title:'K-Pop', queryName:'k-pop'},
            {title:'Gaming', queryName:'gaming'},
            {title:'Eletro Swing', queryName:'eletro+swing'}
        ]
        setGenreList(list)
    },[])

    return(
        <div>
            {genreList&&
            genreList.map((genre)=>{
                return (
                    <Link to={`playlists/${genre.queryName}`} key={genre.queryName}>
                        <p key={genre.queryName}>{genre.title}</p>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default Genres