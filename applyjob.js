import axios from "axios"

const jobtitle=document.getElementById("jobTitle")
const company=document.getElementById("company")
const location=document.getElementById("location")
const salary=document.getElementById("salary")
const description=document.getElementById("job_description")
const requirements=document.getElementById("job_requirements")
const button=document.getElementById("apply-job-button")

const url=new URL(document.URL)
console.log(url)
const searchParams=url.searchParams

const id=searchParams.get("id")
console.log(id)

axios.get("http://localhost:3444/jobo/"+id)
.then(response=>{
    console.log(response)
    const viewjobs=response.data
    jobtitle.innerHTML=viewjobs.job_role
   company.innerHTML=viewjobs.company_name
    location.innerHTML=viewjobs.company_HQ
    salary.innerHTML=viewjobs.salary
    job_description.innerHTML=viewjobs. job_description
   job_requirements.innerHTML=viewjobs.job_requirements
   console.log(job_requirements)

    console.log(viewjobs)

})
.catch(err=>{
    console.log(err)
})