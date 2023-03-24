const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'set to not important' : 'set to important'

    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note