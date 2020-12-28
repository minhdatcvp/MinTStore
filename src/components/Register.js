import React, { Component } from 'react';
import { connect } from 'react-redux';
class Register extends Component {
    rigister(e){
        e.preventDefault();
        this.props.alertOn("danger" , 'Có lỗi xảy ra trong quá trình xác thực');
        
    }
    render() {
        return (
            <div className="register">
                <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
                <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2" type="text" placeholder="Đăng ký" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e) => this.rigister(e)}>Đăng ký</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOn: (alertType , alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertType,
                alertContent
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
