import './App.css'
import UserCard from './components/UserCard'

function App() {
  return (
    <div className='card-holder'>
      <UserCard name="Ankit" desc="This is Ankit" style={{"border-radius":"10px"}}/>
      <UserCard name="Khushi"desc="This is Khushi"/>
      <UserCard name="Sakshi"desc="This is Sakshi"/>
    </div>
  )
}

export default App
