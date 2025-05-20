'use client'
import React from 'react';
import {useEffect, useState} from 'react'
import Portal from "@components/Modals/Modal";

export default function ErrorMessage({
    title = 'Error',  
    message, 
    className=''
}){
    const [show, setShow] = useState(!!message);

    useEffect(() => {
        setShow(!!message);

    }, [message]);

    if(!show || !message) return null;
    
    return (
    <div className="fixed inset-0 z-50 flex items-start justify-center py-2 bg-black bg-opacity-30">
        <div className={`bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden max-w-md ${className}`}>
        
            {/* Title section */}
            <div className='bg-purple-700 text-white px-4 py-2 font-bold text-sm'>
                {title}
            </div>
            <div className='bg-white text-gray-800 px-4 py-3'>
                <p className='text-sm'>{message}</p>
            </div>
            <button onClick={() => setShow(false)}
                className='mt-3 px-4 py-1 bg-purple-800 text-white text-sm rounded hover:bg-purple-700 transition'
                >
                Okay
            </button>
        </div>
    </div>
    );
}