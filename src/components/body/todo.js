import { useDispatch } from "react-redux";
import todoAction from "../../store/todoAction";
import clsx from 'clsx'

const Todo = (props) => {
    const {title , complete,id} = props.data;
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(todoAction.toggle(id))
    }

    const handleRemove =() => {
        dispatch(todoAction.remove(id))
    }

    const handleEdit = () => {
        dispatch(todoAction.edit({id,title}))
    }

    return(
        <>
        <li className="flex todoItem fs-300">
            <label className="flex" onClick={() => handleToggle()}>
            <input type ="checkbox" onClick={() => handleToggle()}/>
            <span className={clsx(complete && "active")}>{title}</span>
            </label>
            <button className="property-btn">...
                <ul className="dropdown-content">
                    <li className="green-clrs" onClick={()=>handleEdit()}>edit</li>
                    <li className="red-clrs" onClick={()=>handleRemove()}>remove</li>
                </ul>
            </button>
        </li>
        
        </>
    )
}

export default Todo;