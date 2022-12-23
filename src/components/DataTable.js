import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ModalForm from './ModalForm';

const DataTable = ({ modalIsOpen, setIsOpen, openModal, hobbies, refetch, closeModal }) => {

    const [checkedData, setCheckedData] = useState([]);
    const [stringified, setStringified] = useState('');

    const handleDelete = id => {
        fetch(`http://localhost:5000/hobbies/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                setIsOpen(false);
                toast.success('Data deleted successfully');
            });
    }

    const handleChecked = (e, hobby) => {
        const dataChecked = e.target.checked;
        if (dataChecked === true) {
            checkedData.push(JSON.stringify(hobby));
            setStringified(checkedData + ``);
        }
        else {
            const hobbyString = JSON.stringify(hobby);
            const filteredData = checkedData.filter(filtered => filtered !== hobbyString);
            setCheckedData(filteredData);
            setStringified(checkedData + ``);
        }
    }

    return (
        <div>
            <div className='mt-20 -mb-16 text-end w-3/4 ml-48'>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={openModal}>Add</button>
                {
                    checkedData.length > 0 &&
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-3 mr-2">
                        <a href={`mailto:info@redpositive.in?subject='Sending rows for hobbies'&body=${stringified}`}>Send</a>
                    </button>
                }
            </div>

            <ModalForm
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                refetch={refetch}
                closeModal={closeModal}
            ></ModalForm>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-3/4 mx-auto my-20">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Serial
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Phone number
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Hobbies
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hobbies.map((hobby, i) =>
                                <tr className="bg-white border-b  hover:bg-gray-50" key={hobby._id}>
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <input id={`checkbox-table-search-${i + 1}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" onClick={(e) => handleChecked(e, hobby)} />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        {i + 1}
                                    </td>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {hobby.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {hobby.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        {hobby.number}
                                    </td>
                                    <td className="py-4 px-6">
                                        {hobby.hobbies}
                                    </td>
                                    <td className="py-4 px-6">
                                        <a href="/" className="font-medium text-blue-600  hover:underline">Update</a>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="font-medium text-blue-600 hover:text-black" onClick={() => handleDelete(hobby._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Toaster />
            </div>

        </div>
    );
};

export default DataTable;