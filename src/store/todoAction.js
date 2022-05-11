
export const actionType = {
    Add : "addtodoItem",
    Remove: "removetodoItem",
    Edit: "editTodoItem",
    Toggle: "toggleTodoItem",
    Clear: "clearTodoItem",
    Filter: "filterTodoItem"
}

const add = (content,id = 0) => ({
    type : actionType.Add,
    payLoad: {content,id}  
})

const remove = (id) => ({
    type : actionType.Remove,
    payLoad: id  
})

const edit = ({id,title}) => ({
    type: actionType.Edit,
    payLoad: {id,title}
})

const toggle = (id) => ({
    type: actionType.Toggle,
    payLoad: id
})

const clear = () => ({
    type: actionType.Clear
})

const filter = (mode) => ({
    type: actionType.Filter,
    payLoad: mode
})


const todoAction = {
    add,
    remove,
    edit,
    toggle,
    clear,
    filter
}

export default todoAction