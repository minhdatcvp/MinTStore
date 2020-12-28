import React, { Component } from 'react';
import '../resources/account_requies.css';
import { connect } from 'react-redux';
import { noteData } from './../containers/Data/firebaseConnect'
var infoUser = [];
class Account extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }
    componentDidMount() {
        noteData.on('value', (dataUser) => {
            dataUser.forEach(element => {
                var key = element.key;
                var name = element.val().name;
                var email = element.val().email;
                var image = element.val().image;
                var password = element.val().password;
                var product = element.val().product;
                infoUser.push({
                    key: key,
                    name: name,
                    email: email,
                    password: password,
                    image: image,
                    product: product
                })
            })
        })
    }
    editstatusLogin = () => {
        // console.log(this.props.editstatusLogin);
        this.props.editStatusLogin();
    }
    isChangeSignUp = (event) => {
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
        if (this.state.password.length < 8) {
            returnData = {
                error: true,
                msg: 'Mật khẩu phải lớn hơn 8 ký tự'
            }
        }
        if (this.state.fname === "") {
            returnData = {
                error: true,
                msg: 'Nhập tên vào First Name'
            }
        }
        if (this.state.lname === "") {
            returnData = {
                error: true,
                msg: 'Nhập tên vào Last Name'
            }
        }
        infoUser.forEach(element => {
            if (element.email === this.state.email) {
                returnData = {
                    error: true,
                    msg: 'Email đã tồn tại vui lòng kiểm tra lại'
                }
            }
        })
        return returnData;
    }
    submitForm(e) {
        e.preventDefault();
        const validation = this.validationForm()

        if (validation.error) {
            this.props.alertOn("danger", validation.msg);
        } else {
            /******************************** */
            var user = {};
            user.name = this.state.fname + " " + this.state.lname;
            user.email = this.state.email;
            user.password = this.state.password;
            user.image = "https://pm1.narvii.com/6729/8e14db5ae41d4d424f5f4212dbeebd37268ae10fv2_00.jpg";
            user.product = " ";
            this.props.addUser(user);
            this.props.alertOn("info", 'Submit form success');
            this.props.getStatusAcc("sign_in")

        }
    }
    /*********************** ham dang nhap thanh cong */
    isChangeSignIn = (event) => {
        var ten = event.target.name;
        var giatri = event.target.value;
        this.setState({
            [ten]: giatri
        })
    }
    checkAcc() {
        let returnData = {
            result: false,
            item: {},
        }
        infoUser.forEach(element => {
            if (element.email === this.state.email && element.password === this.state.password) {
                returnData = {
                    result: true,
                    item: element
                }
            }
        })
        return returnData;
    }
    loginOK = (e) => {
        e.preventDefault();
        const checkAcc = this.checkAcc();
        if (!checkAcc.result) {
            this.props.alertOn("danger", "Email hoặc mật khẩu không chính xác vui lòng nhập lại");
        }
        if (checkAcc.result) {
            this.props.alertOn("info", 'Đăng nhập thành công');
            this.props.getDataUser(checkAcc.item);
            this.editstatusLogin();
            this.props.editsstLoginUser();
        }
    }
    displayAcc = () => {
        if (this.props.statusLogin === "sign_in") {
            return (
                <div className="sign_in">
                    <form>
                        <div className="container">
                            <h2>Sign-In</h2>
                            <label htmlFor="uname"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" onChange={(event) => this.isChangeSignIn(event)} name="email" required />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" onChange={(event) => this.isChangeSignIn(event)} name="password" required />
                            <button type="submit" onClick={(e) => this.loginOK(e)}>Login</button>
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                            </label>
                        </div>
                        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button type="button" className="cancelbtn" onClick={() => this.editstatusLogin()}>Cancel</button>
                            <p className="forgot-password text-right">
                                <span onClick={() => this.props.getStatusAcc("sign_up")}>sign up?</span>
                            </p>
                        </div>
                    </form>
                </div>
            )
        }
        if (this.props.statusLogin === "sign_up") {
            return (
                <div className="sign_up">
                    <form>
                        <div className="container">
                            <h2>Sign-Up</h2>
                            <label htmlFor="uname"><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="fname" onChange={(event) => this.isChangeSignUp(event)} required />
                            <label htmlFor="psw"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="lname" onChange={(event) => this.isChangeSignUp(event)} required />
                            <label htmlFor="uname"><b>Email address</b></label>
                            <input type="text" placeholder="Enter Email address" name="email" onChange={(event) => this.isChangeSignUp(event)} required />
                            <label htmlFor="uname"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={(event) => this.isChangeSignUp(event)} required />
                            <button type="submit" onClick={(e) => this.submitForm(e)}>Sign Up</button>
                        </div>
                        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button type="button" className="cancelbtn" onClick={() => this.editstatusLogin()}>Cancel</button>
                            <p className="forgot-password text-right">
                                Already registered <span onClick={() => this.props.getStatusAcc("sign_in")}>sign in?</span>
                            </p>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="account">
                <div className="back" onClick={() => this.editstatusLogin()}></div>
                {this.displayAcc()}
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        /* nhận giá trị status từ trạng thái để hiển thị cửa sổ đang nhập hay đnăg ký*/
        statusLogin: state.statusAcc
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /* kiểm tra trạng thái để tắt cửa sổ login */
        editStatusLogin: () => {
            dispatch({
                type: "DISPLAY_LOGIN"
            })
        },
        /* gửi về store là đăng nhập hay đăng ký */
        getStatusAcc: (statusAccount) => {
            dispatch({
                type: "CHECK_STATUS_ACC",
                statusAccount
            })
        },
        /* thêm người dùng add vào firebase */
        addUser: (getUser) => {
            dispatch({
                type: "ADD_ACCOUNT",
                getUser
            })
        },
        /* kiểm tra đăng nhập thanh công hay không để chuyển giao diện */
        editsstLoginUser: () => {
            dispatch({
                type: "EDIT_STATUS_LOGIN"
            })
        },
        /* đẩy thông tin user về store để hiển thijowr Nav */
        getDataUser: (infouser) => {
            dispatch({
                type: "GET_INFO_USER",
                infouser
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF",
            })
        },
        alertOn: (alertType, alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertType,
                alertContent
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)
