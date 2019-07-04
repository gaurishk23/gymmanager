import Redux from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';


    class RegisterMember extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <h1>Register Member</h1>
            </div>
        ) 
    }
}


function mapStateToProps(state){
    return {
        
    }

};

function mapDispatchToProps(state){
return {
    
}
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMember) 