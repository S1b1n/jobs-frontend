import axios from "axios";

let form=document.getElementById("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const company_name=form["company_name"];
    const job_role=form["job_role"];
    const salary=form["salary"];
    const job_type= form["job_type"];
    const job_requirements= form["job_requirements"];
    const job_description= form["job_description"];
    const company_HQ=form["company_HQ"];
    const contact_number=form["contact_number"]
    const job_posted=form["job_posted"];
   
    const newJob={
        company_name:company_name.value,
        job_role:job_role.value,
        salary:salary.value,
        job_type:job_type.value,
        job_requirements:job_requirements.value,
        job_description:job_description.value,
        company_HQ:company_HQ.value,
        contact_number: contact_number.value,
        job_posted:job_posted.value,
    }

    
    const addJob=(newJob) =>{
        axios.post("http://localhost:3444/jobo",newJob)
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    addJob(newJob)
    console.log(newJob)
    console.log(job_description)
    console.log(job_posted)
    console.log(company_name)
    console.log(job_role)
    console.log(job_type)
    console.log(job_requirements)
    console.log(contact_number)
    console.log(company_HQ)
    console.log(salary)

    
    
} )

