import React, {Component} from "react";

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {...props};
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (<form onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
                e.target.id.value,
                e.target.title.value,
                e.target.desc.value
            );
        }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id} onChange={this.onChangeHandler}/>
            <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.onChangeHandler} /></p>
            <p><textarea type="text" name="desc" placeholder="description" value={this.state.desc} onChange={this.onChangeHandler}/></p>
            <p><input type="submit"/></p>
        </form>);
    }
}