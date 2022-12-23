import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';

const DataForm = ({ refetch, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/hobbies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Added successfully');
            })
            .catch(err => console.error(err))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto p-4'>

                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input {...register("name", { required: true })} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John doe" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                    <input {...register("email", { required: true })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                    <input {...register("number", { required: true })} type="text" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" />
                    {errors.number && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="hobbies" className="block mb-2 text-sm font-medium text-gray-900">Hobbies</label>
                    <input {...register("hobbies", { required: true })} type="hobbies" id="hobbies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Fishing, swimming" />
                    {errors.hobbies && <span>This field is required</span>}
                </div>
                <div className='flex gap-2'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>

                    <button onClick={closeModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">close</button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default DataForm;