import Update from "../components/Update";
import {connect} from "react-redux";

export default connect(
    function (state) {
        let title,desc,id;

        state.contents.forEach(data => {
            if(data.id === state.selected_content_id){
                id = data.id;
                title = data.title;
                desc = data.desc;
                return;
            }
        });
        return {
            id: id,
            title: title,
            desc: desc
        }
    }, function (dispatch) {
        return {
            onSubmit: (id,title,desc) => {
                console.log(id, title, desc)
                dispatch({type:'READ',id,title,desc})
            }
        }
    }

)(Update);