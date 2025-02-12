import React from 'react'
import { FormatDate } from '../../../utils/FormateDate'

export const ManageDonations = ({donation}) => {
  const {formateDate} =  FormatDate()
  const formattedDate = formateDate(donation.createdAt)
  return (
    <tr>
    <td className='font-bold'>{donation.fullName}</td>
    <td className='text-xs text-green-900'>{formattedDate}</td>
    <td className='text-green-400 font-bold'>$ {donation.donationAmount}</td>
    
  </tr>
  )
}
