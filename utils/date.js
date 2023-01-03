export function ISOToDate(date) {
    if (date) {
        let convertDate = new Date(date)
        return (
            convertDate.getFullYear() +
            '-' +
            (convertDate.getMonth() + 1) +
            '-' +
            convertDate.getDate()
        )
    }
}
