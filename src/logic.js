window.onscroll = () => {
    makeNavSticky();
}

function makeNavSticky(){

    const navbar=document.querySelector(".navbar");
    const btn = document.querySelector('#start-booking-btn')
    const hero = document.querySelector(".hero")

    const x = hero.offsetHeight;
    const y = btn.offsetHeight;

    console.log(x-y);

}

export{makeNavSticky}
