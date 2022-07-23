import React from "react";

const NoteList = ({notes}) => {
  return(
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
        {notes.map(note => (
            <tr key={note.id}>
              <th>{note.id}</th>
              <th>{note.title}</th>
              <th>{note.content}</th>
            </tr>
            )
        )}

        </tbody>
      </table>
  );
}

export default NoteList;