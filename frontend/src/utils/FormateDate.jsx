export const FormatDate = () => {
    function formateDate(isoDate) {
        const date = new Date(isoDate); // Parse the ISO string
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad to 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad to 2 digits
        const year = date.getFullYear(); // Get year
        return `${day}/${month}/${year}`; // Combine into desired format
    }
    return { formateDate }
}

