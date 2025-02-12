import React from 'react'
import { FormatDate } from '../../utils/FormateDate'

export const MyDonation0 = ({donation, idx}) => {
    const {formateDate} = FormatDate()
    const formattedDate =formateDate(donation.createdAt)
    return <tr>
        <th>{idx+1}</th>
        <td>{donation.fullName}</td>
        <td>{formattedDate}</td>
        <td>{donation.paymentMethod}</td>
        <td className='text-green-700 font-bold'>{donation.donationAmount}</td>
    </tr>
}
