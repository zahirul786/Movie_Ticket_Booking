import React, { useState } from "react";
function TicketBookingForm({ data }) {

    const [selectedOptions, setSelectedOptions] = useState({
        moviename: '',
        language: '',
        days: '',
        time: '',
    });

    const [textInput, setTextInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = {   // Store the selected options and user input in local storage
            selectedOptions,
            textInput,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    const handleSelectChange = (event) => {
        setSelectedOptions({
            ...selectedOptions,
            [event.target.name]: event.target.value,
        });
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleClick = () => {
        var storedFormData = JSON.parse(localStorage.getItem('formData'));
        console.log(storedFormData);
    }

    return (
        <div className="bg-gray-100 border-2 border-red-500 border-double mt-2 rounded-lg">
            <form className="flex flex-col p-8" onSubmit={handleSubmit}>
                <h3 className="text-red-500"> Movie Booking Form:</h3>
                <h2 className="text-center text-green-500">Movie name is {data.name}</h2>
                <label>Movie Name : </label>
                <select
                    name="moviename"
                    value={selectedOptions.moviename}
                    onChange={handleSelectChange}
                    className="rounded-lg p-1 bg-gray-200 hover:bg-white"
                >
                    <option value="">select</option>
                    <option value={data.name}>{data.name}</option>

                </select>

                <label>Movie language :</label>
                <select
                    name="language"
                    value={selectedOptions.language}
                    onChange={handleSelectChange}
                    className="rounded-lg p-1 bg-gray-200 hover:bg-white"
                >
                    <option value="">select</option>
                    <option value={data.language}>{data.language}</option>

                </select>
                <label> Days:</label>
                <select
                    name="days"
                    value={selectedOptions.days}
                    onChange={handleSelectChange}
                    className="rounded-lg p-1 bg-gray-200 hover:bg-white"

                >
                    <option value="">select</option>
                    <option value={data.schedule.days}>{data.schedule.days}</option>

                </select>
                <label>Time:</label>
                <select
                    name="time"
                    value={selectedOptions.time}
                    onChange={handleSelectChange}
                    className="rounded-lg p-1 bg-gray-200 hover:bg-white"
                >
                    <option value="">select</option>
                    <option value={data.schedule.time}>{data.schedule.time}</option>

                </select>
                <label>User Name</label>
                <input
                    type="text"
                    value={textInput}
                    onChange={handleTextInputChange}
                    placeholder="Candidate name"
                    className="rounded-lg p-1 bg-gray-200 hover:bg-white"

                />

                <button className="bg-blue-500 mt-4 p-1 text-white rounded-lg w-20" type="submit" onDoubleClick={handleClick}>Book</button>
            </form>
        </div>
    );

};

export default TicketBookingForm;