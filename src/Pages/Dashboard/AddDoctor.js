import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import hostLink from '../../Components/host';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery('available', () => fetch(`${hostLink()}services`).then(res => res.json()));
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const imgStorageKey = 'f41342e948ee937d5eb330c2e281e61f';
  const onSubmit = async data => {
    console.log(data);
    const img = data.image[0];
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img
          };
          //send to db
          fetch(`${hostLink()}doctor`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          }).then(res => res.json())
            .then(inserted => {
              console.log(inserted)
              if (inserted.insertedId) {
                toast.success('doctor added');
                reset()
              } else toast.error('doctor adding failed');
            })
          console.log(doctor);
        }
      })
  }
  const inputClass = `input w-full mt-2 border-2 border-gray-300`;
  if (isLoading) return <Loading></Loading>
  return (
    <div>
      <h1 className="text-3xl text-center p-5">Add Doctor</h1>
      <form className='p-5 w-full md:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        {/* name form */}
        <div className="form-control w-full">
          <label className="label text-sm font-semibold py-0 ml-2">
            <span className="label-text ">Name</span>
          </label>
          <input type="text" name='name' className={inputClass}  {...register("name",
            {
              required: { value: true, message: 'Name is required' },
            })} />
          <label className="label pt-1 ml-2">
            <span className="label-text-alt"></span>
            {errors.name?.type === 'required' && <span className="label-text-alt text-[12px] text-red-600">{errors.name.message}</span>}
          </label>
        </div>

        {/* email form */}
        <div className="form-control w-full">
          <label className="label text-sm font-semibold py-0 ml-2">
            <span className="label-text ">Email</span>
          </label>
          <input type="email" name='email' className={inputClass}  {...register("email",
            {
              required: { value: true, message: 'Email is required' },
              pattern: { value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
            })} />
          <label className="label pt-1 ml-2">
            <span className="label-text-alt"></span>
            {(errors.email?.type === 'required' || errors.email?.type === 'pattern') && <span className="label-text-alt text-[12px] text-red-600">{errors.email.message}</span>}
          </label>
        </div>

        {/* specialization form */}
        <div className="form-control w-full">
          <label className="label text-sm font-semibold  py-0 ml-2">
            <span className="label-text">Specialization</span>
          </label>
          <select {...register('specialty')} class="select w-full my-2">
            {
              services.map(service => <option key={service._id}>{service.name}</option>)
            }
          </select>
        </div>

        {/* photo form */}
        <div className="form-control w-full">

          <label className="label text-sm font-semibold py-0 ml-2">
            <span className="label-text ">Photo</span>
          </label>

          <input type="file" name='image' className="
              form-control
              block
              w-full
              px-2
              py-1
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("image",
              {
                required: { value: true, message: 'Image is required' },
              })} />
          <label className="label pt-1 ml-2">
            <span className="label-text-alt"></span>
            {errors.image?.type === 'required' && <span className="label-text-alt text-[12px] text-red-600">{errors.image.message}</span>}
          </label>
        </div>

        <p className='text-[12px] font-semibold ml-2  hover:cursor-pointer hover:underline'>Forgot Password?</p>
        <input type="submit" value='Add' className="btn modal-action w-full hover:text-white" />
        {/* <p className='text-[12px] text-red-600 text-center font-semibold my-2'>{(error || errorUpdate) && (error?.message || errorUpdate?.message)}</p> */}
      </form>
    </div>
  );
};

export default AddDoctor;