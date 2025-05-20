'use client'

import React from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function UserCard({user, index, openMenu}) {

    return (
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
    );
}