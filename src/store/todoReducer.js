import {v4 as uuidv4} from 'uuid'

const initialState = {
    todo: [],
    edit : {id : 0,title : ""},
    mode: "all"
}

const todoReducer = (state = initialState,action) => {
    const {type,payLoad} = action
    
    switch(type){
        case "addtodoItem":
        {
            if(payLoad.id){
                const newState = {...state}
                let todo = state.todo.map(item => item.id === payLoad.id ?{ ...item,title : payLoad.content }: item)
                newState.todo =[...todo]
                newState.edit = {id : 0,title : ""};
                return newState;
            }else {
                const newItem = {id:uuidv4(),title : payLoad.content,complete: false}
                const newState = {...state}
                newState.todo = [{...newItem},...state.todo]
                return newState
            }
        }
        case "toggleTodoItem":
        {
            const newState = {...state}
            let todo = state.todo.map(item => item.id === payLoad ?{ ...item,complete : !item.complete }: item)
            newState.todo =[...todo]
            return newState
        }
        case "removetodoItem":
        {
            const newState = {...state}
            newState.todo = state.todo.filter(item => item.id !== payLoad)
            return newState;
        }
        case "editTodoItem":
        {
            const newState = {...state}
            newState.edit ={id : payLoad.id, title: payLoad.title}
            console.log(newState)
            return newState
        }
        case "clearTodoItem": 
        {
            const newState = {...state};
            newState.todo = []
            newState.edit = {id : 0,title : ""}
            return newState
        }
        case "filterTodoItem": 
        {
            const newState = {...state};
            newState.mode = payLoad;
            return newState
        }
        default:
            return state
    }

} 

export default todoReducer

// {title : "Create post for instagram" ,complete: false,id: 1},
// {title: "Renew Gym membership",complete: false,id: 2},
// {title: "Paying electricity bill",complete: false,id: 3}