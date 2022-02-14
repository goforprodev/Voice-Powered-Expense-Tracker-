const formatDate = (date) => {
    const d = new Date(date)

    let day = d.getDay()
    let month = d.getMonth();
    const year = d.getFullYear();

    day = day.length < 2 ? `0${day}`: day
    month = month.length < 2 ? `0${month}` : month

    return [day,month,year].join('-');
}

export default formatDate