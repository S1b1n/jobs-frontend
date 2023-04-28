
import axios from 'axios'

axios.get("http://localhost:3444/jobo")
.then(response=>{
 displayJobs(response.data)
})
.catch(err=>{
    console.log(err);

})
let job=document.getElementById("job-container-list")

function displayJobs(jobsArray){
    for (let i=0;i<jobsArray.length;i++){
        console.log(jobsArray[i]);
        const li=document.createElement("li")
        li.classList.add("job-container-list")
        li.innerHTML=""
        li.innerHTML=
        `<article>
                        <img class="company-logo" src="google.jpg" alt=""><br>
                        <span class="job-company-name">${jobsArray[i].company_name}</span><br>
                        <span class="job-role">${jobsArray[i].job_role}</span><br>
                        <span class="job-salary">${jobsArray[i].salary}</span><br>
                        <span class="job-location"> ${jobsArray[i].company_HQ}</span><br>
                        <span class="job-experience">${jobsArray[i].job_requirements}</span><br>
                        <span class="job-dutytime">${jobsArray[i].job_type}</span><br>
                        <span class="job-post">${jobsArray[i].job_posted}</span>
                    </article>
        `

        job.append(li)
        

 li.addEventListener("click",()=>{
    console.log(jobsArray[i]._id)
    window.location.href='/applyjob.html?id='+jobsArray[i]._id

 })
 
}
}