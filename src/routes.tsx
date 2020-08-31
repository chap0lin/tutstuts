import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Genres from './pages/Genres'
import Playlists from './pages/Playlists'
import Playlist from './pages/Playlist'
import Song from './pages/Song'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/song/:songTitle" component={Song} />
            <Route path="/playlist/:playlistId/:videoId" component={Playlist} />
            <Route path="/playlists/:genreName" component={Playlists} />
            <Route path="/login" component={Login} />
            <Route path="/genres" component={Genres} />
            <Route path="/" exact component={Landing} />
        </BrowserRouter>
    )
}

export default Routes