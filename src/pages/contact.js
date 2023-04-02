import React from 'react'
import styles from '@/styles/Contact.module.css'
import { useState } from 'react'


const Contact = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,email,contact,desc)

   const data = {name,email,contact,desc};

   fetch('http://localhost:3000/api/postcontact',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data),
   })
   .then(response => response.text())
   .then(data=>{
    console.log('Sucess',data);
    alert("Thanks For Contacting Us :)")
    setcontact('')
   })
   .catch((error)=>{
    console.log('Error:',error);
   });
  }
  
  const handleChange=(e)=>{
    if(e.target.name == 'name'){
      setname(e.target.value);
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value);
    }
    else if(e.target.name == 'contact'){
      setcontact(e.target.value);
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.innerText);
    }
  
  }

  return (
    <div>
      <div className={styles.headd}>
        <h1>Contact US</h1>
      </div>
      <div className={styles.formsCont}>
        <form onSubmit={handleSubmit}>
          <div className={styles.perCont}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Name</span>
              <div className={styles.inp}>
              <input type="text" className="form-control" name='name' value={name} onChange={handleChange} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
          </div>
          <div className={styles.perCont}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <div className={styles.inp}>
              <input type="email" className="form-control" name='email' value={email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text">We all never share your email with anyone else.</div> */}
              </div>
            </div>
          </div>
          <div className={styles.perCont}>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Contact Number</label>
              <div className={styles.inp}>
              <input type="number" className="form-control" name='contact' value={contact} onChange={handleChange} id="exampleInputPassword1" />
              </div>
            </div>
          </div>
          <div className={styles.perCont}>
            <div className="input-group">
              <span className="input-group-text">Feedback</span>
              <div className={styles.inp}>
              <textarea className="form-control" name='desc'  onChange={handleChange} aria-label="With textarea">{desc}</textarea>
              </div>
            </div>
          </div>
          <div className={styles.perCont}>
            <div className={styles.btnn}>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
