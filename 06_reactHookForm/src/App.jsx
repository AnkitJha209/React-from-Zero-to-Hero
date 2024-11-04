import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const sumbitData = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log(data)
  }

  return (
  <form onSubmit={handleSubmit(sumbitData)}>
    <div>
      <label>First Name: </label>
      <input type="text" {...register('firstName')} />
    </div>
    <div>
      <label>Middle Name: </label>
      <input type="text" {...register('middleName', {
        required: true,
        minLength: {value:3, message:"min length 3"},
        maxLength: {value:6, message:"max length 6 "}   
      })}/>
      {
        errors.middleName && <p>{errors.middleName.message}</p>
      }
    </div>
    <div>
      <label>Last Name: </label>
      <input type="text" {...register('lastName')}/>
    </div>
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting': 'submit'} />
  </form>
  );
}

export default App;
