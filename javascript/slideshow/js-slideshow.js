let i =0;
const images =[];
const time = 2000;

//images
images[0] ="download.jpg";
images[1] ="images.jpg";
images[2] = "sg1.jpg";
images[3]='sg2.jpg';

const captions=['Saul Goodman billboard', 'Bob Odenkirk and Jonathan Banks', 'Saul Goodman by a billboard', 'Saul Goodman']


// change image
function changeImg(){
    document.slide.src = images[i];
    const myCaption = document.querySelector('#sg-caption');
    myCaption.innerHTML = captions[i];

    if(i < images.length -1){ 
        i++;
    } else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;