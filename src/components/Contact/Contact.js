import React, { Component } from 'react';

import Image_Address from './../../Image/map.png';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import { connect } from 'react-redux';
import Register from 'components/Register';
class Contact extends Component {
    state = {
        name : "",
        email: "",
        phone : "",
        address: "",
        textarea: ""

    }
    isChangeContact = (event) => {
        var title = event.target.name;
        var content = event.target.value;
        this.setState({
            [title]: content
        })
    }
    validationForm() {
        let returnData = {
            error: false,
            msg: ''
        }
        //Kiểm tra email
        const re = /\S+@\S+\.\S+/;
        if (!re.test(this.state.email)) {
            returnData = {
                error: true,
                msg: 'Không đúng định dạng email'
            }
        }
        //Kiểm tra password
        if (this.state.phone === "") {
            returnData = {
                error: true,
                msg: 'Điền đầy đủ thông tin só điện thoại'
            }
        }
        if (this.state.name === "") {
            returnData = {
                error: true,
                msg: 'Điền đầy đủ thông tin họ và tên'
            }
        }
        if (this.state.address === "") {
            returnData = {
                error: true,
                msg: 'Điền đầy đủ thông tin địa chỉ'
            }
        }
        return returnData;
    }
    submitForm(e) {
        e.preventDefault();
        const validation = this.validationForm()

        if (validation.error) {
            this.props.alertOn("danger", validation.msg);
        } else {
            /******************************** */
            this.props.alertOn("info", 'Liên hệ thành công chúng tôi sẽ sớm liên hệ lại với bạn');
        }
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    <p className="routerHome"><NavLink to="/Home">Home / </NavLink> Contact</p>
                    <h2 className="title">Contact</h2>
                    <hr />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7264776584398!2d105.75030101424562!3d21.04362759264808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ec79deedeb%3A0x9978fe943b828280!2zOSBQaOG7kSBLaeG7gXUgTWFpLCBLaeG7gXUgTWFpLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1608451556401!5m2!1svi!2s" 
                        height={450} frameBorder={0} style={{ border: 0 , width: '100%'}} allowFullScreen aria-hidden="false" tabIndex={0}>
                    </iframe>
                    <ul className="info_contact">
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <div className="info">
                                <h4>Địa chỉ:</h4>
                                <h6>Số 9 Kiều Mai,Phúc Diễn,Hà Nội</h6>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-phone-square" />
                            <div className="info">
                                <h4>Số điện thoại:</h4>
                                <h6>0389697361</h6>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <div className="info">
                                <h4>Email:</h4>
                                <h6>minhdatptt@gmail.com</h6>
                            </div>
                        </li>
                    </ul>
                    {/* form  */}
                    <div className="contact">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="name" onChange={(event) => this.isChangeContact(event) } className="form-control" placeholder="Họ và tên" />
                                </div>
                                <div className="col">
                                    <input type="text" name="email" onChange={(event) => this.isChangeContact(event) } className="form-control" placeholder="Email" />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="phone" onChange={(event) => this.isChangeContact(event) } className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="col">
                                    <input type="text" name="address" onChange={(event) => this.isChangeContact(event) } className="form-control" placeholder="Địa chỉ" />
                                </div>
                            </div>
                        </form>
                        <textarea name="textarea" onChange={(event) => this.isChangeContact(event) }  id="textarea" cols={30} rows={10} placeholder="Lời nhắn" defaultValue={""} />
                        <button onClick={(e) => this.submitForm(e)} type="button" className="btn btn-info">Gửi</button>
                    </div>
                    <Register/>
                </div>
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
        alertOn: (alertType, alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertType,
                alertContent
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)
