const clock = () =>{
    a = new Date();
    h=a.getHours();
    m=a.getMinutes();
    s=a.getSeconds();
    hrotation = 30*h+m/2;
    mrotation = 6*m;
    srotation = 6*s;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}
setInterval(clock,1000);