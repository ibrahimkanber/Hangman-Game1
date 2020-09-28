const word=document.querySelector(".word");
const finalMessage=document.querySelector(".final-message-container");
const message=document.querySelector(".message")
const notifications=document.querySelector(".notifications");
const wordEntry=document.getElementById("wordEntry");
const wrongLettersElement=document.querySelector(".wrong-letters p");
const figureParts=document.querySelectorAll(".partOfFigure");
const hint=document.getElementById("hint");
const playAgain=document.getElementById("play-again");



///Select random word from array

const  vocabulary=["clarusway","john","edward","walter","mccarthy","joseph","tom","ezran"]
let index=Math.floor(Math.random()*vocabulary.length);
const selectedWord=vocabulary[index];

///Hint

hint.addEventListener("click",Hint)
function Hint (){
       switch(selectedWord){

            case "tom":
                alert ("Manager-Motivation")
                break;
            case "clarusway":
                alert ("Reinvent Yourself")
                break;
            case "edward":
                alert ("mentor-react ")
                break;
            case "walter":
                alert ("LMS Master") 
                break; 
            case "Mccarthy":
                alert("Instructor CSS-HTML")
                break;
            case "joseph":
                alert ("Selametle!!!")
                break;
            case "john":
                alert ("Instructor--SASS-CSS-REACT NATIVE ")
                break;
            case "ezran":
                alert ("Instructor--JS--REACT NATIVE")
            
       } 
}

////Get value from input and seperate values

wordEntry.addEventListener("change",seperateLetters);
wordEntry.addEventListener("input",myFunction);

function myFunction(event){
         event.target.value=event.target.value.slice(0,1)
}
       


let correctLetters=[];
let wrongLetters = [];
function seperateLetters(){
    
    if (selectedWord.includes(wordEntry.value.toLowerCase())){
        correctLetters.push(wordEntry.value.toLowerCase());
     
        
    }else{
        wrongLetters.push(wordEntry.value);
        showFigurePart();
        wrongLettersElement.innerHTML+= `${wordEntry.value} |`
    }
    createLetter();
    wordEntry.value="";
    endOfGame()

    
}

////Show  Part of figure if answer is not correct
function showFigurePart(){
    figureParts.forEach((part,index)=>{
        const errors = wrongLetters.length;
        console.log(errors)
        if (index < errors) {
            part.style.display = 'block';
          } else {
            part.style.display = 'none';
          }
       
    })
    
}


///Manupulate and create letter

function createLetter(){
    let html="";
    for (let letter of selectedWord){
        html+=`<div class='letters'>${correctLetters.includes(letter)? letter:""}</div>`;  
         
    }
    word.innerHTML=html;
}
createLetter()

////End of Game
function endOfGame(){
    let correctSet=new Set(correctLetters);
  
    console.log(wrongLetters)
        if (wrongLetters.length===6){
            finalMessage.style.display="grid";
            finalMessage.style.backgroundColor=`rgba(179,46,53)`
            message.innerHTML="Man down"
        }
        if(correctSet.size===new Set(selectedWord.split("")).size) {
            finalMessage.style.display="grid";
            finalMessage.style.backgroundColor="green";
            message.innerHTML="Congrulations!!!"
        }

        console.log(wrongLetters)
        console.log(correctSet)
    
}


///play-again

playAgain.addEventListener("click",reset1)

function reset1(){
    document.location.reload()
    // console.log("hello");
    // correctLetters=[];
    // wrongLetters=[];
    // finalMessage.style.display="none";
    // wrongLettersElement.innerHTML="";
    // createLetter();
    // seperateLetters();
    

}




////Another Option to end 

// let innerWord=word.innerText.replace(/\n/g,"");
// if (innerWord===selectedWord{
//     finalMessage.style.display="grid";
//     finalMessage.style.backgroundColor="green"
//     message.innerHTML="Congrulations!!!"
   
// }else{
//     finalMessage.style.display="grid";
//     finalMessage.style.backgroundColor=`rgba(179,46,53,${innerWord.length/vocabulary[2].length})`
//     message.innerHTML="Man down"
    
// }   


