import { useState } from "react";
import "./App.css";

function App() {

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const handlefirstName =(e)=>{

  //   // console.log(e.target.value)
  //   setFirstName(e.target.value)
  // }
  // const handleLastName = (e) =>{
  //   // console.log(e.target.value)
  //   setLastName(e.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: '',
    favCar: ''
  })

  const handleChange = (event) => {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
      isVisible: false,
      mode: '',
      favCar: '',
    })
  }
  // console.log(formData)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="first name" name="firstName" onChange={handleChange}
        value={formData.firstName}/>
        <br />
        <input type="text" placeholder="last name" name="lastName" onChange={handleChange}
        value={formData.lastName}/>
        <br />
        <input type="email" placeholder="email" name="email" onChange={handleChange}
        value={formData.email}/>
        <br />
        <textarea name="comment" onChange={handleChange}
        value={formData.comment}/>

        <input type="checkbox" name="isVisible"
        id="isVisible" 
        onChange={handleChange}
        checked={formData.isVisible}/>
        <label htmlFor="isVisible">Am i visible</label>

        <br />
        <input type="radio" name="mode" onChange={handleChange} value='Online'
        id="online"
        checked={formData.mode == 'Online'}/>
        <label htmlFor="online">Online</label>
        <input type="radio" name="mode" onChange={handleChange} value='Offline'
        id="offline"
        checked={formData.mode == 'Offline'}/>
        <label htmlFor="offline">Offline</label>

        <select name="favCar" id="favCar"
        value={formData.favCar} onChange={handleChange}>

          <option value="scorpio">Scorpio</option>
          <option value="lamborgini">lamborgini</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
        </select>

        <button type="submit">Submit</button>

      </form>
      {formData.firstName}
    </div>
  );
}

export default App;
