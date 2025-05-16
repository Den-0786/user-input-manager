'use client'

import React from 'react';
import { useState } from 'react';
import ErrorMessage from  './errorMessage'


import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function UserRow() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: '',
            age: '',
            gender: '',
            phone: '',

        }
    )

    const [editIndex, setEditIndex] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openMenu = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };
    const closeMenu = () => {
        setAnchorEl(null);
        setSelectedIndex(null);
    };

    const handleDelete = () => {
        const updatedUsers = [...users];
        updatedUsers.splice(selectedIndex, 1);
        setUsers(updatedUsers);
        closeMenu();
    };

    const handleEdit = () => {
        const user = users[selectedIndex]
        setFormData(user);
        setEditIndex(selectedIndex);
        closeMenu();
    }

    const submitHandler = (e) => {
        e.preventDefault();

    const isEmpty = Object.values(formData).some(value => String(value).trim() === '');
    if (isEmpty) {
        setError('All fields must be field')
        return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if(!nameRegex.test(formData.name)|| !nameRegex.test(formData.gender)) {
        setError('Name and Gender must contain letters only')
        return;
    }

    const numberRegex = /^[0-9]+$/;
    if(!numberRegex.test(formData.phone) || !numberRegex.test(formData.age)) {
        setError('Age and Phone must contain numbers only')
        return;
    };
    
    if(editIndex !== null) {
        const updated = [...users];
        updated[editIndex] = {...formData, id: users[editIndex].id};
        setUsers(updated);
        setEditIndex(null);
    } else {
        
        setUsers(prev => [...prev, {...formData, id: Math.random()}])
    }

    setFormData({name: '', age: '', gender: '', phone: '', });
    setError('');
    
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
    <div >
        <ErrorMessage message={error} className='mb-2'></ErrorMessage>
        <form onSubmit={submitHandler} >
            <div className='flex flex-col gap-2 bg-white rounded-lg'>
                <div className="flex flex-col flex-1 min-w-[150px] mt-2">
                    <label className='text-gray-800 ml-3'>Name</label>
                    <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600 "
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='text-gray-800 ml-3'>Age</label>
                    <input type="number" 
                    name = 'age'
                    value = {formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600 "
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='text-gray-800 ml-3'>Gender</label>
                    <input type="text" 
                    name = 'gender'
                    value = {formData.gender}
                    onChange={handleChange}
                    placeholder="Enter your gender" 
                    className="p-1 text-sm rounded-md text-gray-800 outline outline-1 outline-gray-600"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className='text-gray-800 ml-3'>Phone</label>
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
        <div className="mt-4">
            {users.map((user, index) => (
            <div key={user.id}
                className="bg-white rounded-lg shadow-md px-4 py-2 mb-2 border border-gray-200">
                <div className='relative top-1 left-[16rem]'>
                    <IconButton onClick={(e) => openMenu(e, index)}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <h2 className='text-xl font-semibold mb-2 text-gray-800'>User Info</h2>
                <p className='text-gray-900'><span className='text-semibold'>Name:</span>{user.name}</p>
                <p className='text-gray-900'><span className='text-semibold'>Age: </span>{user.age}</p>
                <p className='text-gray-900'><span className='text-semibold'>Gender: </span>{user.gender}</p>
                <p className='text-gray-900'><span className='text-semibold'>Phone: </span>{user.phone}</p>
            </div>
                ))}
        </div>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <MenuItem onClick={handleEdit}>
                    <EditIcon fontSize='small' className='mr-2'/>Edit
                </MenuItem>

                <MenuItem onClick={handleDelete}>
                    <DeleteIcon fontSize='small' className='mr-2'/>Delete
                </MenuItem>
            </Menu>
    </div>
    )
}


