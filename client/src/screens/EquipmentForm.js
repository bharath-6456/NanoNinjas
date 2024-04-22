import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EquipmentForm() {
  let [err, setErr] = useState('')
  let { register, handleSubmit } = useForm()
  let navigate = useNavigate()
  async function handleFormSubmit() {
    let res = await axios.post("http://localhost:4000/user-api/toolsubmit")
    if (res.data.message === 'Successful')
      navigate('/')
    else
      setErr(res.data.message)
  }
  return (
    <form className='container mt-3' onSubmit={handleSubmit(handleFormSubmit)}>
      {err}
      <h1 className='text-center'>Booking Form</h1>
      <div className='mx-auto'>
        <label className='form-label'>Name</label>
        <input type='text' className='form-control w-75 mx-auto' {...register('name', { required: true })} />
        <label className='form-label'>Email</label>
        <input type='email' className='form-control w-75 mx-auto' {...register('email', { required: true })} />
        <label className='form-label'>Phone number</label>
        <input type='text' className='form-control w-75 mx-auto' {...register('phone', { required: true, minLength: 10, maxLength: 10 })} />
        <label className='form-label'>Tool name</label>
        <input type='text' className='form-control w-75 mx-auto' {...register('toolname', { required: true })} />
        <label className='form-label'>Tool Image</label>
        <input type='file' accept="image/*" className='form-control w-75 mx-auto' {...register('toolimage', { required: true })} />
      </div>
      <div className='col'>
        <button className='btn btn-danger mt-3'>Register</button>
      </div>
    </form>
  )
}

export default EquipmentForm