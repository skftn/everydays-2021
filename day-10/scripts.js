const avatars = document.querySelectorAll('.avatar');
let currentAvatarIndex = 0;

function setAvatarImages(){
    avatars.forEach(async element => {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const person = await data.results[0]
        const imgUrl = await person.picture.large;
        const name = await (`${person.name.first} ${person.name.last}`);
        
        const img = element.children[0];
        const h3 = element.children[1];
        img.src = `${imgUrl}`;
        h3.innerHTML = `${name}`
    })
}

setAvatarImages();

function onButtonClick(direction){

    avatars[currentAvatarIndex].firstElementChild.classList.toggle('active');

    if(direction === 'prev'){
        if(currentAvatarIndex == 0) currentAvatarIndex = avatars.length - 1;
        else currentAvatarIndex--;
    } else if(direction === 'next'){
        if(currentAvatarIndex == avatars.length-1) currentAvatarIndex = 0;
        else currentAvatarIndex++;
    }

    avatars[currentAvatarIndex].firstElementChild.classList.toggle('active');
}