import axios from "axios"

const userName=document.getElementById("userName")
const profession=document.getElementById("profession")
const about=document.getElementById("about")
const phoneNumber=document.getElementById("phoneNumber")
const websiteorlink=document.getElementById("websiteorlink")
const github=document.getElementById("github")
const state=document.getElementById("state")
const education=document.getElementById("education")
const skills=document.getElementById("skills")
const certificates=document.getElementById("certificates")
const projects=document.getElementById("projects")

if(!document.cookie){
    window.location.href='/job.html'
    return
}

const tokenCookie=document.cookie
const tokenCookieSplit= tokenCookie.split("=")
const token=tokenCookieSplit[1]

axios.get("http://localhost:3444/profileMe",{
    headers:{
        "Authorization":`bearer ${token}`
    }
})

.then(response=>{
    if(!response.data){
        window.location.href='./editprofile.html'
    }
            console.log(response)
            const profiles=response.data
            userName.innerHTML=profiles.userName
            profession.innerHTML=profiles.profession
            about.innerHTML=profiles.about
            phoneNumber.innerHTML=profiles.phoneNumber
            websiteorlink.innerHTML=profiles.websiteorlink
            github.innerHTML=profiles.github
            state.innerHTML=profiles.state
            education.innerHTML=profiles.education
            skills.innerHTML=profiles.skills
            certificates.innerHTML=profiles.certificates
           projects.innerHTML=profiles.projects
})
.catch(err=>{
    console.log(err)
})