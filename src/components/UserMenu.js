'use client';

import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function UserMenu({
    anchorEl,
    closeMenu,
    handleEdit,
    handleDeleteClick,
}) {
    return(
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
        >
            <MenuItem onClick={handleEdit}>
                <EditIcon fontSize='small' className='mr-2'/>Edit
            </MenuItem>

            <MenuItem onClick={handleDeleteClick}>
                <DeleteIcon fontSize='small' className='mr-2'/>Delete
            </MenuItem>
        </Menu>
    )
}