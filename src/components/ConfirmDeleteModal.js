'use client'

export default function ConfirmDeleteModal({showConfirmDelete, setShowConfirmDelete, confirmDelete}) {

    if(!showConfirmDelete) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ">
            <div className='bg-white p-4 rounded-lg text-center'>
                <h3 className='text-lg font-semibold mb-2 mt-0 text-white bg-purple-700 px-4 py-1 w-full rounded-lg'>Confirm Delete</h3>
                <p className="mb-4 text-gray-700">Are you sure you want to delete this user?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={confirmDelete} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => setShowConfirmDelete(false)}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}