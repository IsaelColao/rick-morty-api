
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CharacterInfoExtended } from '../components/CharacterInfoExtended'
import { CharacterApp } from '../components/CharacterApp'
import { ErrorLoad } from '../components/ErrorLoad'

export const AppRouter = ({ characters, page, total, setPage }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterApp characters={characters} page={page} total={total} setPage={setPage}/>} />
                <Route path="/character/:characterId" element={<CharacterInfoExtended characters={characters}/>} />
                <Route path="/error" element={<ErrorLoad />} />
            </Routes>
        </BrowserRouter>
    )
}
