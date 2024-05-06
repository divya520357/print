import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    useCopilotAction,
    useCopilotChat,
    useCopilotReadable
} from '@copilotkit/react-core'

const Admin = () => {
    const [selectedButton, setSelectedButton] = useState('pending'); // Set initial state to 'pending'

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const PrintJob= {
        status: 'Complete' | 'printing '
    }

    useCopilotAction({
        name:'printingRequest',
        description:'add a new request for printing',
        parameters:[
            {
                name: "id",
                type:"string",
                description:"The id of the printing job"
            },
        ],
        handler:({id}) => {
            setSelectedButton()

        }
    })

    return (
        <section>
            <header className="App-header p-5">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXduYndqYnN5YmRveGttZmx6YnR0NGN0dmo3c2Vnejd5ZTFicjFheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ITiT2Xq3bdMYOrqTKa/giphy.gif" className="App-logo" alt="logo" />
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className=' hover/edit:text-indigo-500' to="/">Sign out</Link>
      </nav>
    </header>
        
        <div className="flex p-8">

          {/* Left Column with Buttons */}
            <div className="flex flex-col mr-8">
                <button
                    className={`mb-4 p-5 rounded-md bg-indigo-500 text-white hover:bg-blue-600 focus:outline-none ${selectedButton === 'pending' && 'bg-blue-600'
                        }`}
                    onClick={() => handleButtonClick('pending')}
                >
                    Pending Requests
                </button>
                <button
                    className={`mb-4 p-5 rounded-md bg-indigo-500 text-white hover:bg-blue-600 focus:outline-none ${selectedButton === 'completed' && 'bg-green-600'
                        }`}
                    onClick={() => handleButtonClick('completed')}
                >
                    Completed Requests
                </button>
                <button
                    className={`mb-4 p-5 rounded-md bg-indigo-500 text-white hover:bg-blue-600 focus:outline-none ${selectedButton === 'processing' && 'bg-green-600'
                        }`}
                    onClick={() => handleButtonClick('processing')}
                >
                    Processing Requests
                </button>
            </div>

            {/* Right Column with Info */}
            <div className="flex-grow">
                    {selectedButton === 'pending' && (
                        <div className="font-medium bg-blue-200 p-4 rounded">
                            <h3>Name</h3>
                            <div className="font-light text-xs">
                                <p>Quantity:1</p>
                                <p>Print Color: Black & White</p>
                                <p>Print Size: A4</p>
                                <p>Orientation: Landscape</p>
                            </div>
                        </div>
                    )}
                    {selectedButton === 'completed' && (
                        <div className="font-medium bg-blue-200 p-4 rounded">
                        <h3>Completed</h3>
                        <div className="font-light text-xs">
                            <p>Quantity:1</p>
                            <p>Print Color: Coloured</p>
                            <p>Print Size: A2</p>
                            <p>Orientation: Landscape</p>
                            <p>Role: </p>
                            <p>Orientation: Landscape</p>

                        </div>
                    </div>
                    )}
                    {selectedButton === 'processing' && (
                        <div className="font-medium bg-blue-200 p-4 rounded">
                        <h3>Processing</h3>
                        <div className="font-light text-xs">
                            <p>Quantity:1</p>
                            <p>Print Color: Black & White</p>
                            <p>Print Size: A4</p>
                            <p>Orientation: Landscape</p>
                        </div>
                    </div>
                    )}
                    {!selectedButton && (
                        <div className="bg-gray-200 p-4 rounded">
                            Select a button to view information.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Admin;
