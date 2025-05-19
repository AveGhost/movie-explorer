import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './routes/home/home'
import SearchPage from './routes/search/search'
import { Navigate } from 'react-router'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/search/:name" element={<SearchPage/>}/>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
