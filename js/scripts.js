const curYear = new Date();
document.querySelector("#year").textContent = curYear.getFullYear();

const btn = document.querySelector('#theButton');
const pw = document.querySelector('#pageWrapper');

btn.addEventListener('click', () => {
pw.classList.toggle('moveOver');
});

//get hotel json
import {hotels} from './hotels.js';
//console.log(hotels);
const hotelCards=document.querySelector('#cards')

hotels.forEach(hotel => {
    const mySection = document.createElement('section')

    const infoWrapper=document.createElement('div')
    infoWrapper.classList="infoWrapper"

    const theImage = document.createElement("img")
    theImage.src=`${hotel.photo}`
    theImage.alt=`hotel.name`

    const theName=document.createElement("h2")
    theName.textContent=hotel.name

    const theAddress=document.createElement("address");
    theAddress.innerHTML=`${hotel.address[0]}<br>${hotel.address[1]}`;

    const thePhone=document.createElement("a");
    thePhone.textContent=hotel.phone
    thePhone.href=`tel:${hotel.phone}`
    thePhone.classList="tel"

    const theButton=document.createElement("a");
    theButton.textContent="More Info"
    theButton.href="#"
    theButton.className="moreInfo"

    mySection.appendChild(theImage)
    infoWrapper.appendChild(theName)
    infoWrapper.appendChild(theAddress)
    infoWrapper.appendChild(thePhone)
    infoWrapper.appendChild(theButton)
    mySection.appendChild(infoWrapper)
    hotelCards.appendChild(mySection)
})
