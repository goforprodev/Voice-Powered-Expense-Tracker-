const formatDate = (date) => {
    const d = new Date(date)

    let day = d.getDate()
    let month = d.getMonth();
    const year = d.getFullYear();

    day = day.toString().length < 2 ? `0${day}`: day
    month = month.toString().length < 2 ? `0${month}` : month
    return [year,month,day].join('-');
}

export default formatDate