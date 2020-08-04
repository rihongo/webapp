import Read from '../components/Read';
import { connect} from 'react-redux';
export default connect(
    function(state){
        var title, desc;
        if(state.mode === 'WELCOME'){
            title = state.welcome_content.title;
            desc = state.welcome_content.desc;
        } else {
            state.contents.forEach(data => {
                if(data.id === state.selected_content_id){
                    title = data.title;
                    desc = data.desc;
                    return;
                 }
            });
        }
        return {
            title: title,
            desc: desc
        }
    }
)(Read);