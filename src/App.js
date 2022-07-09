import {Component, useEffect, useState} from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import UserService from "./service/UserService";

export class App extends Component{
    constructor(props) {
        super(props);
        this.setState({
            notes: []
        });
        this.userService = new UserService();
    }

    componentDidMount() {
        this.userService.getAll().then(data =>{
            console.log(data);
        })
    }
    render(){
        return(
            <h1>Hola mundo</h1>
        )
    }
}
/*
function App() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArr);
    };

    const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
    };

    return (
        <div className="App">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
    );
}*/

export default App;