const { default:axios}=require("axios")
 const form=document.getElementById("form")

 if(!document.cookie){
    window.location.href='./index.html'
 }

 const tokenCookie=document.cookie
 const tokenCookieSplit=tokenCookie.split("=")
 const token=tokenCookieSplit[1]

 console.log(token)

 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userName=form["userName"].value
    const profilePicture=form["profilePicture"].value
    const profession=form["profession"].value
    const education=form["education"].value
    const skills=form["skills"].value
    const about=form["about"].value
    const phoneNumber=form["phoneNumber"].value
    const websiteorlink=form["websiteorlink"].value
    const github=form["github"].value
    const state=form["state"].value
    const projects=form["projects"].value
    const certificates=form["certificates"].value

const editprofile={
    userName:userName,
    profilePicture:profilePicture,
    profession:profession,
    education:education,
    skills:skills,
    about:about,
    phoneNumber:phoneNumber,
    websiteorlink:websiteorlink,
    github:github,
    state: state,
    projects:projects,
    certificates:certificates
}



axios.post("http://localhost:3444/profile",editprofile,{
    headers:{
        "Authorization":`bearer ${token}`,
    },
})

.then(response =>{
    console.log(response.data)
    window.location.href='./profile.html'
})
.catch(err =>{
    console.log(err)
})

 })