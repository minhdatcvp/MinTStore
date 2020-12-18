import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AlertComponent extends Component {
    handleDismiss = () => {
        this.props.AlertOff();
    }
    render() {
        if(this.props.alertStatus === false) return null;
        else{
            return (
                < AlertContainer>
                    < Alert  onDismiss={()=> this.handleDismiss()} timeout = {1500} type={this.props.alertType} > {this.props.alertContent} </ Alert >
                </ AlertContainer >
            );
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertStatus: state.alertStatus,
        alertType : state.alertType,
        alertContent : state.alertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AlertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent)
