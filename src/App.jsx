import './App.css'
import { useCharacter } from './hooks/useCharacter'
import { AppRouter } from './routers/AppRouter'

function App() {
    const { results} = useCharacter()
	return (
		<>
           <AppRouter characters={ results }/>
		</>
	)
}

export default App
