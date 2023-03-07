const quotetext=document.querySelector(".quote");
quotebtn=document.querySelector("button");
author=document.querySelector(".author .name")
soundbtn=document.querySelector(".sound");
copybtn=document.querySelector(".copy");
twitterbtn=document.querySelector(".twitter");
console.log(soundbtn)



function randomquote(){
    quotebtn.classList.add("loading");
    quotebtn.innerText="Loading quote ......"
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quotetext.innerHTML=result.content;
        author.innerHTML=result.author;
        quotebtn.classList.remove("loading");
        quotebtn.innerText="New Quote"
    })
}

soundbtn.addEventListener("click",()=>{
    let utter= new SpeechSynthesisUtterance(`${quotetext.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(utter)
})

copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quotetext.innerHTML)
})

twitterbtn.addEventListener("click",()=>{
    let twitturl=`https://twitter.com/intent/tweet?url=${quotetext.innerHTML}`;
    window.open(twitturl,"_blank");
})

quotebtn.addEventListener("click",randomquote);