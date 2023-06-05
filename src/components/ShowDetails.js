import React, { useState } from "react";
import TicketBookingForm from "./TicketBookingForm";
function ShowDetails({ showSummary }) {
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(!showForm);
    }
    return (
        <div className="bg-gradient-to-r from-yellow-300 to-pink-300 min-h-screen p-4">
            <h2 className="text-blue-600 py-4 hover:text-white">It is the {showSummary.name} Movie Summary :</h2>
            <div className="text-orange-900" dangerouslySetInnerHTML={{ __html: showSummary.summary }}></div>
            <button className="bg-blue-500 mt-4 p-1 text-white rounded-lg" onClick={handleClick}>Book Ticket</button>
            {showForm && <TicketBookingForm data={showSummary} />}
        </div >
    );
};

export default ShowDetails;
