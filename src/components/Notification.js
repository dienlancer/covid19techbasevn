import React, {Component} from 'react';
import {connect} from 'react-redux';
class Notification extends Component {
	constructor(props){
		super(props);						
	}				
	render(){	
		let {noti}=this.props;
		if(noti.isShow===false) return false;
		return (
			<div className="loading">DATA LOADING...</div>          
			);
		}
}
const mapStateToProps = state => {		
    return {
        noti: state.notify
    }
}
export default connect(mapStateToProps, null)(Notification);
