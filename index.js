setInterval(() => {
    let d = new Date()
    let hour = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let hr_rotation = 30 * hour +minutes/2;
    let min_rotation = 6 * minutes;
    let sec_rotation = 6 * seconds;

    document.getElementById("hours").style.transform = 'rotate(' + hr_rotation + 'deg)';
    document.getElementById("minutes").style.transform = 'rotate(' + min_rotation + 'deg)';
    document.getElementById("seconds").style.transform = 'rotate(' + sec_rotation + 'deg)';
}, 1000)