'use client'
import React from 'react';
import ErrorMessage from './errorMessage';

export default function UserForm({ formData, handleChange, submitHandler, 
    error, editIndex}) {

    return (
        <form onSubmit={submitHandler} >
            <div className='flex flex-col gap-2 bg-white rounded-lg'>
                <div className="flex flex-col flex-1 min-w-[150px] mt-2 px-4">
                    <label className='text-gray-800 ml-3'>Name:</label>
                    <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600 "
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px] px-4">
                    <label className='text-gray-800 ml-3'>Age:</label>
                    <input type="number" 
                    name = 'age'
                    value = {formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600 "
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px] px-4">
                    <label className='text-gray-800 ml-3'>Gender:</label>
                    <input type="text" 
                    name = 'gender'
                    value = {formData.gender}
                    onChange={handleChange}
                    placeholder="Enter your gender" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px] px-4">
                    <label className='text-gray-800 ml-3'>Phone:</label>
                    <input type="text"
                    name = 'phone'
                    value = {formData.phone}
                    onChange = {handleChange}
                    placeholder="Enter your phone"
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600"
                    />
                </div>
                <div className=' mt-2 mb-2 ml-3'>
                    <button 
                        type='submit'
                        className="bg-purple-900 text-white px-6 py-1 rounded-lg font-semibold hover:bg-purple-800 transition">
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
            </div>
        </form>
    );
}