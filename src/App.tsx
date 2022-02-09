import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Chat } from './pages/Chat'

import { GlobalStyle } from './globalStyle.js'

export const App = () => {

  return (

    <Router>

      <GlobalStyle />
      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/chat" element={ <Chat /> } />
        
      </Routes>

    </Router>
    
  )

}