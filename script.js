setInterval(() => {
    date = new Date();
    hour= date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    


    hourRot= 30*hour+minute/2;
    minRot = 6*minute;
    secRot = 6*second;

    hours.style.transform = `rotate(${hourRot}deg)`;
    minutes.style.transform = `rotate(${minRot}deg)`;
    seconds.style.transform = `rotate(${secRot}deg)`;
}, 1000);