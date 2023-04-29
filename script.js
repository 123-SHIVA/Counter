let increament=document.getElementById("increament")
let decreament=document.getElementById("decreament")
let displayValue=document.getElementById("display")
let reset=document.getElementById("reset")


// increament function

increament.addEventListener("click",()=>{

const value=Number(displayValue.innerText);

if (value<10){
    displayValue.innerText=value+1
}
else{
        alert("not increament")
}
 
    
console.log(value)
})


// decreament function 
decreament.addEventListener("click",()=>{

    const value=Number(displayValue.innerText);
    
    if (value>0){
        displayValue.innerText=value-1
    }
    else{
            alert("not increament")
    }
     
        
    console.log(value)
    })

    reset.addEventListener("click" ,()=>{
      displayValue.innerText=0;
    })


