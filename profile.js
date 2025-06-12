const myProfile = () => {
    const Gabriel = document.getElementById('utc-time');
    const Chukwuebuka = new Date();
    Gabriel.textContent = `The current time is: ${Chukwuebuka.toUTCString()}`;
};

setInterval(myProfile, 1000);