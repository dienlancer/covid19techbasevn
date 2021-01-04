import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actSearch,actShowNotify,actHideNotify} from "./../actions/index";
class FormSearch extends Component {
	constructor(props){
		super(props);
		this.state={
			country_name:"",			
		}				
	}
	handleChange=(event)=>{		
		this.setState({country_name:event.target.value});
	}
	handleSearch=()=>{		
	  this.props.goSearch(this.state.country_name);
	}
	handleClear=()=>{
		this.props.goSearch("");
		this.setState({country_name:""});
	}				
	handleShowNotify=()=>{		
		this.props.showNotify();
	}
	handleHideNotify=()=>{		
		this.props.hideNotify();
	}
	render(){				
		return (
			<form className="form-search">					
              <div className="form-group">	
			  <h1 className="text-center covid19-title">COVID19 API TECHBASEVN TEST</h1>
			  <h6>Please type slug keyword of country : south-africa / china / palestine</h6>				
                <input name="country_name" value={this.state.country_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter slug of country ..." />
                <div className="input-group-btn btn-click">
                  <button type="button" className="btn btn-danger" onClick={this.handleSearch}>Search</button>
                  <button type="button" className="btn btn-warning" onClick={this.handleClear}>Clear</button>				  
                </div>
              </div>
            </form>	
			);
		}
}
const mapDispatchToProps = (dispatch, ownProps) => {	
    return {		
        goSearch: (query_country_name) => {			
            dispatch(actSearch(query_country_name)) ;
		},		
		showNotify:()=>{			
			dispatch(actShowNotify());
		},
		hideNotify:()=>{
			dispatch(actHideNotify());
		}
    }
}
export default connect(null,mapDispatchToProps)(FormSearch);
