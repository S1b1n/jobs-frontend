import axios from 'axios'

const form =document.getElementById("form")
  form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const userName=form["userName"]
    const password=form["password"]
    const Email=form["Email"]

          const userDetails={
            userName:userName.value,
            password:password.value,
            Email:Email.value
          }
          const adduser=(userDetails)=>{
           axios.post("http://localhost:3444/user",userDetails)
            .then(response=>{
            console.log(response)
            window.location.href="./index.html"
        })
            .catch(err=>{
            console.log(err);
})
          }
          adduser(userDetails)
          form.reset()
})






