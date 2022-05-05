function countdown () {


    const endDate = new Date(2022, 7, 12, 13, 00, 00,00); 
    const now = new Date();

    var razlika = endDate - now;

    

    var sec = 1000;
    var min = sec*60;
    var hours = min*60;
    var days = hours*24;

    const dnevi = Math.floor(razlika/days);
    const ure = Math.floor((razlika%days)/hours);
    const minute = Math.floor((razlika%hours)/min);
    const sekunde = Math.floor((razlika%min)/sec);

document.getElementById("days").innerHTML = dnevi;
document.getElementById("hours").innerHTML = ure;
document.getElementById("Minutes").innerHTML = minute;
document.getElementById("Seconds").innerHTML = sekunde;



}
setInterval(countdown, 1000);