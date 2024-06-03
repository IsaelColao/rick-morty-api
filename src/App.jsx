import './App.css'
import { useCharacter } from './hooks/useCharacter'
import { AppRouter } from './routers/AppRouter'

function App() {
    const [ results, page, total, setPage] = useCharacter()
	return (
		<>
           <AppRouter characters={ results } page={page} total={total} setPage={setPage}/>
		</>
	)
}

export default App
