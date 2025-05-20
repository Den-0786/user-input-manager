'use client'

import React from 'react';
import { useState } from 'react';
import ErrorMessage from  './errorMessage';
import UserForm from './userForm';
import UserCard from './userCard';
import UserMenu from './UserMenu';
import ConfirmDeleteModal from './ConfirmDeleteModal'



export default function UserRow() {

    const [users, setUsers] = useState([]);
    const emptyError = {title: '', message: ''};
    const [error, setError] = useState(emptyError);
    const [formData, setFormData] = useState(
        {
            name: '',
            age: '',
            gender: '',
            phone: '',

    });

    const [editIndex, setEditIndex] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const openMenu = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };
    const closeMenu = () => {
        setAnchorEl(null);
        setSelectedIndex(null);
    };
    const confirmDelete = () =>{
        const updatedUsers = [...users];
        updatedUsers.splice(selectedIndex, 1);
        setUsers(updatedUsers);
        closeMenu();
        setShowConfirmDelete(false);
    }

    const handleDeleteClick = () => {
        setShowConfirmDelete(true)
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
        setError({
            title: "Missing Fields!!",
            message: 'All fields must be filled'
        });
        return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if(!nameRegex.test(formData.name)|| !nameRegex.test(formData.gender)) {
        setError({
            title:"Invalid Input!!!",
            message:'Name and Gender must contain letters only'
        });
        
        return;
    }

    const numberRegex = /^[0-9]+$/;
    if(!numberRegex.test(formData.phone) || !numberRegex.test(formData.age)) {
        setError({
            title:"Invalid Input!!",
            message:'Age and Phone must contain numbers only'
        });
        
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
    setEditIndex(null);
    setError(emptyError);
    setAnchorEl(null);
    setSelectedIndex(null);
    
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
    <div >
        {error.message && (
            <ErrorMessage 
                title={error.title}
                message={error.message}
                className='mb-2'>
            </ErrorMessage>
        )}
        <UserForm
        formData={formData}
        handleChange={handleChange}
        submitHandler={submitHandler}
        error={error}
        editIndex={editIndex}
        />
        <div className='mt-4'>
            {users.map((user, index) => (
                <UserCard
                    key={user.id}
                    user={user}
                    index={index}
                    openMenu={openMenu}
                />
            ))}
        </div>
        <UserMenu
            anchorEl={anchorEl}
            closeMenu={closeMenu}
            handleEdit={handleEdit}
            handleDeleteClick={handleDeleteClick}
        />

        <ConfirmDeleteModal
            showConfirmDelete={showConfirmDelete}
            setShowConfirmDelete={setShowConfirmDelete}
            confirmDelete={confirmDelete}
        />
    </div>
    );
}