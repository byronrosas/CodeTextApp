import React from 'react';
import sendText from '../../redux/actions/sendText';
import Page from './page';
import { connect } from 'react-redux';
import { TextObj } from '../../model/textobj';
import { fetchText } from '../../redux/actions/sendText';
interface Props{
	sendText:any
}
class Home extends React.Component<Props, { value: string }>{
	constructor(props: any) {
		super(props);

		this.state = this.state = {
			value: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		this.setState({ value: event.target.value })
	}

	handleSubmit(event: any) {
		event.preventDefault();

		let textObj: TextObj = {
			text: this.state.value,
		};
		if (textObj.text !== "") {			
			fetchText(textObj,this.props.sendText);
		}
	}
	render() {
		return (
			<Page handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
		);
	};
}
const mapStateToProps = (state: any) => ({
	objText: state.sendTextType,
});
const mapDispatchToProps = {
	sendText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);