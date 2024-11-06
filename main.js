let like =[];
let disLike =[];
let data = [
    {
        id: 1,
        nom: "card1",
    },
    {
        id: 2,
        nom: "card2",
    },
    {
        id: 3,
        nom: "card3",
    },
    {
        id: 4,
        nom: "card4",
    },
]
let l = data.length;
let cards = document.getElementById("Cards");
let cmp = 0;

showCards();
function showCards(){
    if(cmp<l){
        cards.innerHTML=`
            <div class="post" >
                <h3>${data[cmp].nom}</h3>
            </div>
    `
    }
    
}

function finCards(){
    cards.innerHTML=`  PHOTOS NON DISPONIBLES `
    const btnDisLiked=document.createElement("span");
    btnDisLiked.setAttribute("id","disliked_btn");
    btnDisLiked.innerHTML="Diliked";
    document.getElementById("dislike-btn").replaceWith(btnDisLiked);
    const btnLiked=document.getElementById("")
}


