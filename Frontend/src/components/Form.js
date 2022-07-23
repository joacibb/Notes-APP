import React from "react";

const Form = ({note,setNote}) => {

  const handleChange = e =>{
    setNote({
      ...note,
    [e.target.name]: e.target.value
    })
  }
  let{title,content} = note

  const handleSubmit = () =>{
    //data validation
    if(title === '' || content === ''){
      alert('Invalid data')
      return
    }

    //consult
    const requestInit = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(note)
    }
    fetch('http://localhost:8080/api/notes',requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

    //form restart
        setNote({
          title:'',
          content:''
        })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input name="title" onChange={handleChange} type="text" id="title" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
          <textarea name="content" onChange={handleChange} id="content" className="form-control"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form;