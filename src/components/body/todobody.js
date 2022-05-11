import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";
import "./todobody.css";

const TodoBody = () => {
  const fetchDatas = useSelector((item) => item.todo);
  const [data, setData] = useState([]);
  let mode = useSelector((item) => item.mode);
  useEffect(() => {
    switch (mode) {
      case "all":
        setData(() => fetchDatas);
        break;
      case "pending":
        setData(() => fetchDatas.filter((item) => !item.complete));
        break;
      case "completed":
        setData(() => fetchDatas.filter((item) => item.complete));
        break;
      default:
        setData(() => fetchDatas);
        break;
    }
  }, [fetchDatas, mode]);

  return (
    <main className="primary-body">
      <ul>
        {data.map((item) => (
          <Todo key={item.id} data={item} />
        ))}
      </ul>
    </main>
  );
};

export default TodoBody;
