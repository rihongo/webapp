import Create from "../components/Create";
import {connect} from 'react-redux';
export default connect(
    null,
    function (dispatch) {
        return {
            onSubmit: (title,desc) => {
                dispatch({type:'CREATE_PROCESS',title:title, desc: desc})
            }
        }
    }
)(Create);