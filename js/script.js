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
    clock.innerHTML = `${hour>12 ? "0"+(hour - 12) : hour}:${minute}:${second} ${hour>12?"pm":"am"}`;
}

setInterval(digital, 1000);
