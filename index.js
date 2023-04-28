import axios from 'axios'

const form =document.getElementById("form")

if(document.cookie){
   window.location.href='./profile.html'
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const userName=form["userName"]
      const password=form["password"]
      
          const posted={
            userName:userName.value,
            password:password.value,
    
          }
          
           axios.post("http://localhost:3444/user/login",posted)
            .then(response=>{
           let comparisonResult=response.data.comparisonResult
           const token=response.data.token
           document.cookie=`token=${token}`

           window.location.href='./profile.html'
        })
            .catch(err=>{
            console.log(err+"Login Failed");
})
})

