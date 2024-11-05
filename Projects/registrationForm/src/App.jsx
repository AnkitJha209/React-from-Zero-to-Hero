import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const submitForm = async (data) => {
    await new Promise(resolve => setTimeout(resolve,5000))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col text-gray-400 items-center py-10 bg-gray-800 h-screen">
      <div className="mb-2 flex flex-col">
        <label className="text-left">First Name  </label>
        <input type="text" {...register('firstName', {required: true,
          minLength: {value: 3, message: 'min length should be 3'}
        })} className="rounded-sm bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div className="mb-2 flex flex-col">
        <label className="text-left">Last Name  </label>
        <input type="text" {...register('lastName',{required: true,
          minLength: {value: 3, message: 'min length should be 3'}
        })} className="rounded-sm bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div className="mb-2 flex flex-col">
        <label className="text-left">DOB  </label>
        <input type="date" min='2000-01-01' max='2010-10-31' {...register('date')} className="rounded-sm bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
      </div>
      <div className="mb-2 flex flex-col">
        <label className="text-left">Age  </label>
        <input type="Number" min={14} max={24} {...register('age')} className="rounded-sm text-center bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
      </div>
      <div className="mb-2 flex flex-col">
        <label className="text-left">Zip Code/ Postal Code  </label>
        <input type="Number" {...register('zipCode')} className="rounded-sm text-center bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
      </div>
      <div className="mb-2 flex flex-col">
        <label className="text-left">Address </label>
        <textarea  {...register('address')} className="rounded-sm bg-gray-400 text-gray-900 px-2 focus:outline-none"/>
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting...' : 'Submit'}/>
    </form>
  )
}

export default App
