function digital() {
    const clock = document.getElementById("clock");
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
// this will make sure that  if the minute or seconds are less than 10 then it will add a '0' before that.
    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    // it is for 12 hours clock 
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    clock.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(digital, 1000);
