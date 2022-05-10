export const actionType = {
    Add : "addtodoItem",
    Remove: "removetodoItem",
    Edit: "editTodoItem",
    Toggle: "toggleTodoItem",
    Clear: "clearTodoItem",
    Fetch: "fetchTodoItem"
}

export const fetch = (payload) => ({
    type: actionType.Fetch,
    payload: payload
})

export const add = (content,id = 0) => ({
    type : actionType.Add,
    payLoad: {content,id}  
})

export const remove = (id) => ({
    type : actionType.Remove,
    payLoad: id  
})

export const edit = ({id,title}) => ({
    type: actionType.Edit,
    payLoad: {id,title}
})

export const toggle = (id) => ({
    type: actionType.Toggle,
    payLoad: id
})

export const clear = () => ({
    type: actionType.Clear
})

const todoAction = {
    add,
    remove,
    edit,
    toggle,
    clear,
    fetch
}

export default todoAction