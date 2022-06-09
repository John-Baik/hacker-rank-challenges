function timeConversion(s) {
    let hour = s.substring(0, 2);
    let minutetoSeconds = s.substring(3, 8);
    const modifier = s.substring(8);
    if (hour === '12') {
        hour = '00'
    }
    if (modifier === 'PM') {
        hour = parseInt(hour) + 12;
    }
    let time = `${hour}:${minutetoSeconds}`;
    return time;
}