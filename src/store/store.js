import {createStore} from 'redux';

const initState = {
    mode: 'WELCOME',
    welcome_content:{
        title:'WEB',
        desc:'Hello Web'
    },
    selected_content_id: [],
    max_content_id:3,
    contents:[
        {id:1,title: 'HTML', desc:'HTML is...'},
        {id:2,title: 'CSS', desc:'CSS is...'},
        {id:3,title: 'Javascript', desc:'Javascript is...'}
    ]
}
const reducer = (state=initState, action) => {
    console.log(action.type);
    if (action.type === 'WELCOME'){
        return {...state, mode: action.mode};
    } else if (action.type === 'READ'){
        return {...state, mode: 'READ', selected_content_id: action.id};
    }
    if (action.type === 'CREATE') {
        return {...state, mode: 'CREATE'}
    }
    if (action.type === 'CREATE_PROCESS') {
        let newId = state.max_content_id + 1;
        let newContents = [
            ...state.contents,
            {
                id:state.max_content_id + 1,
                title:action.title,
                desc:action.desc
            }
        ]
        return {
            ...state,
            contents: newContents,
            max_content_id: newId,
            mode: 'READ',
            selected_content_id: newId
        }
    }
    if (action.type === 'UPDATE') {
        return {...state, mode: 'UPDATE'};
    }
    if (action.type === 'UPDATE_PROCESS') {
        const newContents = [...state.contents];
        console.log(newContents);

        for (let i=0; i<newContents.length; i++) {
            if (newContents[i].id === action.id){
                newContents[i].title = action.title;
                newContents[i].desc = action.desc;
            }
        }
        console.log(newContents);
        return {...state, contents: newContents, mode:'READ', selected_content_id: action.id}
    }
    if (action.type === 'DELETE') {
        return {...state, mode: action.mode}
    }
    return state;
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
