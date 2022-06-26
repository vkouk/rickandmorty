import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CharactersPage from 'containers/characters'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router
