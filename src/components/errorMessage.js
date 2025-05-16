'use client'
import React from 'react';
import {useEffect, useState} from 'react'

export default function ErrorMessage({message, className=''}){
    
    const [show, setShow] = useState(!message);

    useEffect(() => {
        if(message)
        {
            setShow(true);
            const timer = setTimeout(() => {

                setShow(false);
            }, 4000);

            return() => clearTimeout(timer)
        }
        
    }, [message]);

    if(!show || !message) return null;
    
    return (

        <div className={`bg-red-400 text-white  px-4 py-3 rounded-lg shadow-md relative' ${className} role='alert`}>
            <p className='text-sm mt-1'>{message}</p>
        </div>
    );
}