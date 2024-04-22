import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EquipmentForm() {
  let [err, setErr] = useState('');
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  async function handleFormSubmit() {
    let res = await axios.post("http://localhost:4000/user-api/toolsubmit");
    if (res.data.message === 'Successful')
      navigate('/');
    else
      setErr(res.data.message);
  }

  return (
    <form className='container mt-3' onSubmit={handleSubmit(handleFormSubmit)}>
      {err && <div className="alert alert-danger">{err}</div>}
      <h1 className='text-center mb-4'>Booking Form</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <label className='form-label'>Name</label>
          <input type='text' className='form-control' {...register('name', { required: true })} />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Email</label>
          <input type='email' className='form-control' {...register('email', { required: true })} />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Phone number</label>
          <input type='text' className='form-control' {...register('phone', { required: true, minLength: 10, maxLength: 10 })} />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Tool name</label>
          <input type='text' className='form-control' {...register('toolname', { required: true })} />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Tool Image</label>
          <input type='file' accept="image/*" className='form-control' {...register('toolimage', { required: true })} />
        </div>
      </div>
      <div className='col text-center mt-3'>
        <button className='btn btn-danger'>Register</button>
      </div>
    </form>
  );
}

export default EquipmentForm;
