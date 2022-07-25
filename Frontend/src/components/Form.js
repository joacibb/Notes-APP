import React from "react";

const Form = ({note,setNote,setListUpdated}) => {

  const handleChange = e =>{
    setNote({
      ...note,
    [e.target.name]: e.target.value
    })
  }
  let{title,content,categories} = note

  const handleSubmit = () => {
    //data validation
    if (title === '' || content === '') {
      alert('Invalid data')
      return
    }

    //consult
    const requestInit = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(note)
    }
    fetch('http://localhost:8080/api/notes', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))


    //form restart
    setNote({
      title: '',
      content: '',
      categories:[]
    })
  }

 /* const handleAddCategory = (id,categories) =>{
    //data validation
    if (categories === '' || content === '') {
      alert('Invalid data')
      return
    }
    const requestInit = {
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(note)
    }
    console.log('{debug category: }'+categories)
    fetch('http://localhost:8080/api/notes/' + id +'/' + categories, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))


    setNote({
      categories:''
    })

    setListUpdated(true)
  }*/

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input value={title} name="title" onChange={handleChange} type="text" id="title" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
          <textarea value={content} name="content" onChange={handleChange} id="content" className="form-control"></textarea>
      </div>
      {/*
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">Categories</label>
        <input name="categories" onChange={handleChange} type="text" id="categories" className="form-control"/>
      </div>*/}

      <button type="submit" className="btn btn-primary">Submit</button>
      {/* <button onClick={() => handleAddCategory(note.id, note.categories)} className="btn btn-dark">Add Category</button>*/}
    </form>
  )
}

export default Form;