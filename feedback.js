let input=document.getElementById("feedback-input")
let submit=document.getElementById("feedback-submit")
let  submission=document.getElementById("feedback-submission")



submit.addEventListener("click",()=>{
    if(input.value.length<=0){
        console.log("please enter a valid name");
        return;
    }
    if(input.value.length<=6){
        console.log("please enter the minimum charecter");
        return;
    }
    render();
    
    })
 
    function render(){
        
    let p= document.createElement("p")
    input.innerHTML=""
    p.innerHTML="Thank you for the feedback"
    submission.appendChild(p); 
    input.value="";
    

    
    location.reload()






}  
