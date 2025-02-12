import React, { useState } from 'react';
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';
import { UserGetMyDonations } from '../../../hooks/getMyDonations';
import { MyDonation0 } from '../../../components/donation/MyDonation0';
import { jsPDF } from 'jspdf';
import {toast} from 'react-hot-toast'


export const MyDonations = () => {
    const { myDonations  } = UserGetMyDonations();
    const [loading, setLoading] = useState(false)
    const downloadPDF = () => {
        setLoading(true)
        const doc = new jsPDF();
        
        // Add title
        doc.setFontSize(16);
        doc.text("Donation History", 20, 20);

        // Add table headers
        doc.setFontSize(12);
        doc.text("S.No", 20, 30);
        doc.text("Full Name", 50, 30);
        doc.text("Payment Method", 110, 30);
        doc.text("Amount Paid", 160, 30);

        // Add table data
        myDonations.forEach((donation, index) => {
            const yPosition = 40 + index * 10; // Space rows evenly
            doc.text(String(index + 1), 20, yPosition);
            doc.text(donation.fullName || "N/A", 50, yPosition);
            doc.text(donation.paymentMethod || "N/A", 110, yPosition);
            doc.text(String(donation.donationAmount || 0), 160, yPosition);
        });

        // Save PDF
        setTimeout(() => {
            doc.save("donations.pdf");
            toast.success("PDF Downloaded")
            setLoading(false)
        }, 1000)

    };

    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />

            {/* Main Content */}
            <div className="bg-gray-100  p-2 md:m-3 rounded-lg flex flex-col w-full">
                <h4 className="text-start text-blue-800 font-bold text-xl mb-3">My Donations</h4>
                <div className="text-center font-bold text-lg bg-white rounded-md p-3 mb-2 mt-2">
                    Donated <span className="text-green-400">History</span>
                </div>
                <div className="overflow-x-auto mt-3 text-center w-full">
                    <table className="table table-zebra">
                        {/* Table Header */}
                        <thead>
                            <tr className="text-sky-900 font-bold">
                                <th>S.No</th>
                                <th>Full Name</th>
                                <th>Payment Method</th>
                                <th>Amount Paid</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="text-sky-600">
                            {myDonations?.map((donation, idx) => (
                                <MyDonation0 donation={donation} idx={idx} key={idx} />
                            ))}
                        </tbody>
                    </table>
                    {/* Download Button */}
                    {myDonations?.length > 0 ? <button
                        onClick={downloadPDF}
                        className="btn bg-primary text-white mt-5 hover:bg-blue-600 rounded-full"
                    >{loading ?<span className='loading loading-spinner'></span>: "Download Pdf" }
                        
                    </button>: <p className='text-danger mt-5 text-md'>No Donation History Found At This Time</p>}
                </div>
            </div>

            {/* Mobile Sidebar */}
            <Usermobilesidebar />
        </div>
    );
};
