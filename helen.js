
function contentSollu(){
    var type=document.getElementById("input")
    var typeContent=type.value;
    if(typeContent=='RE'){
    var display=document.querySelector(".helen")
    display.innerHTML=`
    <div>
    <p class="timer"></p>
    </div>
    <div class="content">
   </div>
    `
    let count=10;
window.setTimeout(function timer(){
        document.querySelector(".timer").innerText="HAPPY "
        }, 1000)
         window.setTimeout(()=>{
            document.querySelector(".timer").innerText="BIRTHDAY"
        }, 1*2000)
           window.setTimeout(()=>{
            document.querySelector(".timer").innerText="KANAZHAGI"
              }, 3000)
             
              window.setTimeout(()=>{
                document.querySelector(".timer").innerText="A girl who always brings a smile to my face will happy place.sending you lots of birthdaylove today"
                  }, 4000)
                 
            
   
    document.body.append(display)
}
else{
    alert("hey kanazhagi try again")
}
}

// console.log(contentSollu());