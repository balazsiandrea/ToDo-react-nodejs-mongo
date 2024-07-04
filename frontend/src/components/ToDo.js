import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';


const ToDo = ({text, deleteToDo}) => {
  return (
    <div>
        <div className="todo">
            <div className="note">{text}</div>
            <div className="icons" >
                <ClearIcon className="icon" onClick={deleteToDo}/>
            </div>
        </div>
    </div>
  )
}

export default ToDo

