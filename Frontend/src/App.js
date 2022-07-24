import './App.css';
import React,{Fragment, useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import NoteList from "./Components/NoteList";
import Form from "./Components/Form";

function App() {

  const [note,setNote] = useState({
    title: '',
    content:'',
    archived:false
  })

  const [notes,setNotes] = useState([])

  const [listUpdated,setListUpdated] = useState(false)

  useEffect(() => {
    const getNotes = () => {
      fetch('http://localhost:8080/api/notes/available')
            .then(res => res.json())
            .then(res => setNotes(res))
    }
    getNotes()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Notes App' />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Note List</h2>
            <NoteList note={note} notes={notes} listUpdated={listUpdated} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign:'center'}}>Note Form</h2>
            <Form note={note} setNote={setNote}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
