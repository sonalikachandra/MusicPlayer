var n = prompt("Your Name?");
alert("Welcome to ALPHA Music "+n);


let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Slow Motion- Amaria BB", filePath:"1.mp3", coverPath:"1.jpg"},
    {songName: "Heat Waves- Glass Animals", filePath:"2.mp3", coverPath:"2.png"},
    {songName: "Samjhawaan- Arijit Singh, Shreya Ghosal", filePath:"3.mp3", coverPath:"3.jpg"},
    {songName: "At My Worst- Pink Sweat$", filePath:"4.mp3", coverPath:"4.jpg"},
    {songName: "Apna Bana le- Sachin Jigar, Arijit Singh", filePath:"5.mp3", coverPath:"5.jpg"},
    {songName: "Darasal- Atif Aslam, Pritam", filePath:"6.mp3", coverPath:"6.jpg"},
    {songName: "Everything Sucks-Vault Boy", filePath:"7.mp3", coverPath:"7.jpg"},
    {songName:"Mileya Mileya- Rekha Bharadwaj, Jigar Saraiya", filePath:"8.mp3", coverPath:"8.jpg"},
    {songName: "Shinunoga E-Wa-Fujii Kaze", filePath:"9.mp3", coverPath:"9.jpg"},
    {songName: "Liggi-Ritviz", filePath:"10.mp3", coverPath:"1.jpg"},
    {songName: "Pehla Pyaar-Armaan Malik, Vishal Mishra", filePath:"11.mp3", coverPath:"11.jpg"},
    {songName: "Zehnaseeb- Vishal-Shekhar", filePath:"12.mp3", coverPath:"12.jpg"},
]
songItems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 
  })

   masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

   })
 audioElement.addEventListener('timeupdate',()=>{
    
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
     myProgressBar.value=progress;
  })

  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

 })
 const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
      
       element.classList.add('fa-play-circle');
        })
    
 }
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
 
   makeAllPlays();
   songIndex= parseInt(e.target.id);
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   
   audioElement.src=`${songIndex}.mp3`;
   masterSongName.innerText=songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
   
    })
 })

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>12){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
   
 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
   audioElement.src=`${songIndex}.mp3`;
   masterSongName.innerText=songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
   
 })
  
 


