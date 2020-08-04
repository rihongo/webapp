import Nav from "../components/Nav";
import {connect} from "react-redux";
export default connect(
    (state) => { return {data:state.contents} }
    ,
    (dispatch) => {
        return {
            onClick: function (id) {
                dispatch({type:'READ', id:id});
            }
        }
    }
)(Nav);