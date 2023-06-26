const reviews = [
    {
        id : 1,
        name : "Lana Rhodes",
        img: "https://techstory.in/wp-content/uploads/2022/02/lana-rhoades-fb-1.jpg",
        text : "I am a proffesional yoga teacher. I help my step-brother learn yoga poses "


    },
    {
        id : 2,
        name : "Emilly Wills ",
        img: "https://i0.wp.com/celebritate.com/wp-content/uploads/2023/05/Emily-Willis.jpg?fit=1800%2C2000&ssl=1",
        text : "I like to sleep a lot. I help my step-brother pass his college exams by giving him tutions "


    },
    {
        id : 3,
        name : "KissCat ",
        img: "https://us-east1-aws.api.snapchat.com/web-capture/www.snapchat.com/add/kisscat.xyz/preview/square.jpeg",
        text : "I live with my husban and sometimes he pretend to be my step-son, I don't know why ? It's really strange"


    },
    {
        id : 4,
        name : "Alina Rai ",
        img: "https://image.telegram-group.org/Uploads/2023/01/eF6ZTg8Cg5.jpg",
        text : "I'm married to a lazzy husband , but my stepson is very caring. He fullfils my all needs and desires. "


    },
]


           var current = 0;
    const name = document.getElementById('name1');
    const img = document.getElementById('image');
    const txt = document.getElementById('text');

    window.addEventListener("DOMContentLoaded",()=>{
        const item = reviews[current];
        img.src = item.img;
        name.textContent = item.name;
        txt.textContent = item.text;
       
    })
    function shownext(val){
        var current = val;
        const name = document.getElementById('name1');
        const img = document.getElementById('image');
        const txt = document.getElementById('text');

        const item = reviews[current];
        img.src = item.img;
        name.textContent = item.name;
        txt.textContent = item.text;

    }


    document.getElementById('right').addEventListener('click',()=>{
       current++;
       if (current>3){
        current = 0;
       }
       shownext(current);
    })
    
    




     document.getElementById('left').addEventListener('click',()=>{
        current--;
       if (current<0){
        current = 3;
       }
       shownext(current);
        
     })