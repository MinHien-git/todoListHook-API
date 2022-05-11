import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import todoAction from "../../store/todoAction"

const dates = ['Sunday','Monday','Tuesday','Thursday','Wednesday','Friday','Saturday']
const months = ['January','February','March','April','May','June','August','September','October','November','December']

const Header = () => {
    const d = new Date()
    const datas = useSelector(item => item.todo)
    const dispatch = useDispatch(item=> item.todo)

    const handleClear = () => {
        dispatch(todoAction.clear())
    }

    const handleFilter = (type) => {
        dispatch(todoAction.filter(type))
    }

    return (
        <header className="primary-header">
            <div className="flex">
                <div className="flex column">
                    <h3 className="blue-clrs">{dates[d.getDay()]}, {d.getDate() === 1 ? d.getDate()+"st" : d.getDate() === 2 ? d.getDate() + "nd" : d.getDate() + "th"}</h3>
                    <p className="fs-300">{months[d.getMonth()]}</p>
                </div>
                <h5 id ="count">{datas.length} Task</h5>
            </div>
            <ul className="flex">
                <li className="fs-200 btn"><button onClick={()=>handleFilter("all")}>All</button></li>
                <li className="fs-200 btn"><button onClick={()=>handleFilter("pending")}>Pending</button></li>
                <li className="fs-200 btn"><button onClick={()=>handleFilter("completed")}>Completed</button></li>
                <li className="fs-200 blue-bg" id= "clear"><button className="white-clrs" onClick={handleClear}>Clear All</button></li>
            </ul>
        </header>
    )
}

export default Header