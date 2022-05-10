import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import todoAction from "../../store/todoAction"
import './footer.css'

const Footer = () => {
    const [task,setTask] = useState("")
    const [id,setId] = useState(0);
    const dispatch = useDispatch()
    const datas = useSelector(item => item.edit)    
    useEffect(()=>{
        if(datas)
        {
            setId(()=>datas.id)
            setTask(()=>datas.title)
        }
    },[datas])

    const handleAddingItem = () => {
        if(task !== "" && id === 0)
        {
            dispatch(todoAction.add(task))
            setTask(()=> "")
        }else if(id !== 0){
            dispatch(todoAction.add(task,id))
        }else {
            return;
        }

    }

    return (
        <footer className="flex ver-c-hor-space-btw primary-footer ">
            <input type ="text" placeholder="Enter your task" value={task} onChange = {(e) =>setTask(e.target.value)}/>
            <button id ="add-btn" className="orange-bg" onClick = {() => handleAddingItem()}>
                <span></span>
                <span></span>
            </button>
        </footer>
    )
}

export default Footer