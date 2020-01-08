import React from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { TextObj } from '../../model/textobj';
import { Alert } from 'react-bootstrap';

interface Props {
	objText: TextObj,
}
class Show extends React.Component<Props, { status: boolean }>{
	constructor(props:any) {
		super(props);
		this.state = {
			status:false
		}
	}
	componentWillReceiveProps(next_props: any) {
		if (next_props !== this.props.objText) {
			this.setState({status:true});
		}
	}
	
	timer=()=> setTimeout(() => {
		this.setState({status:false});		
	}, 2500);	
		
	render() {
		let text = this.props.objText;		
		let stimer=this.timer();
		return (
			<div>
				{this.state.status ? (

					<AlertText />

				) : (						
						<div></div>
					)}
				<Page text={text} />
			</div>
		);
	};
}

function AlertText() {
	return (
		<Alert key="0" variant="success">
			El mensaje se envio con éxito.
  		</Alert>
	)
}

const mapStateToProps = (state: any) => ({
	objText: state.textReducer,
});

export default connect(mapStateToProps)(Show);