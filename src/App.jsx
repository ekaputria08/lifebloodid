// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from './auth/login/Login'
import Riwayat from './pages/Riwayat/Riwayat.jsx'
// import Daftar from './auth/daftar/Daftar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Login /> */}
        {/* <Daftar /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App