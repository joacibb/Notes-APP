import React from "react";

const NoteList = ({note, notes, setListUpdated}) => {

  const handleDelete = id =>{
    const requestInit = {
      method: 'DELETE'
    }
    fetch('http://localhost:8080/api/notes/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

    setListUpdated(true)
  }

  let{title,content,categories} = note

  const handleUpdate = id =>{
    //data validation
    if (title === '' || content === '') {
      alert('Invalid data')
      return
    }
    const requestInit = {
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(note)
    }
    fetch('http://localhost:8080/api/notes/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

    setListUpdated(true)
  }


  return(
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
        {notes.map(note => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>{note.categories}</td>
              <td>
                <div className="mb-3">
                  <button onClick={() => handleDelete(note.id)} className="btn btn-danger">Delete</button>
                </div>
                <div className="mb-3">
                  <button onClick={() => handleUpdate(note.id)} className="btn btn-dark">Update</button>
                </div>
              </td>
            </tr>
            )
        )}

        </tbody>
      </table>
  );
}

export default NoteList;