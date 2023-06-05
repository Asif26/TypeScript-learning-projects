// new Date(timestamp)
// new Date(year,month,day)
function createDate(dayOrTimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrTimestamp)
        : console.log(new Date(year, month, dayOrTimestamp));
}
createDate(7, 27, 1987);
