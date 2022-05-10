import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getData from "../data/data";
import Todo from "./todo";
import "./todobody.css"

const TodoBody = () => {
    const datas = useSelector(item => item.todo)
    const [data,setData] = useState([]);

    useEffect(()=> {setData(getData)},[])

    return(
        <main className="primary-body">
            <ul>
                {datas.map(item =><Todo key ={item.id} data ={item} /> )}
            </ul>
        </main>
    )
}

export default TodoBody;