'use client'
import React from 'react';
import UserRow from '@components/userRow'


export default function Home() {

  return (
    <div className="bg-gray-600 shadow-md rounded-xl p-4 max-w-sm mx-auto space-y-4 mt-16">
        <UserRow></UserRow>
    </div>
  )
}