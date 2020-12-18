import logo from './../Image/logo.png';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { dataLaptop } from 'containers/Data/dulieuLaptop.js';
import { connect } from 'react-redux';
import { noteData } from './../containers/Data/firebaseConnect';
var product_List = [];
var infoUser = [];
class Nav extends Component {
    state = {
        sticky: false,

        pointScroll: 0,
        arrSuggest: [],

        arrData: dataLaptop,
        wordSg: "",
        statusSuggest: false,

        checkLogin: true,
        displayInfo: false
    }
    hidden_menu = () => {
        if (!this.props.sttLoginUser) {
            if (this.state.sticky === true) {
                return (
                    <div className="menu_sticky">
                        <div className="bg-back" onClick={() => this.stickyClick()}></div>
                        <div className="menu_requies">
                            <div><i className="fas mobie-nav-icon fa-times" onClick={() => this.stickyClick()}></i></div>
                            <ul>
                                <li>
                                    <NavLink to="/Home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Laptop">Laptop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/SmartPhone">SmartPhone</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Watch">Watch</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Blogs">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <p onClick={(giatri) => { this.editstatusLogin("sign_in") }}>Sign in</p>
                                </li>
                                <li className="nav-item">
                                    <p onClick={(giatri) => { this.editstatusLogin("sign_up") }}>Sign up</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                );
            }
            if (this.state.sticky === false) {
                return (
                    <div className="stiky" >
                        <i className="fas mobie-nav-icon fa-bars" onClick={() => this.stickyClick()} />
                    </div>
                )
            }
        }
        if (this.props.sttLoginUser) {
            if (this.state.sticky === true) {
                return (
                    <div className="menu_sticky">
                        <div className="bg-back" onClick={() => this.stickyClick()}></div>
                        <div className="menu_requies">
                            <div><i className="fas mobie-nav-icon fa-times" onClick={() => this.stickyClick()}></i></div>
                            <div className="thongtin">
                                <img src="https://pm1.narvii.com/6729/8e14db5ae41d4d424f5f4212dbeebd37268ae10fv2_00.jpg" alt="" />
                                <div className="name_info">
                                    <h4>{this.props.datauser.name}</h4>
                                    <h6>{this.props.datauser.email}</h6>
                                </div>
                            </div>
                            <ul>
                                <li><Link onClick={() => this.stickyClick()} to="/Home">Thông tin cá nhân</Link></li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/Home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/Laptop">Laptop</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/SmartPhone">SmartPhone</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/Watch">Watch</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/Blogs">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => this.stickyClick()} to="/Contact">Contact</NavLink>
                                </li>
                                <li onClick={() => this.props.editsstLoginUser()}><Link to="">Log out</Link></li>
                            </ul>

                        </div>
                    </div>
                );
            }
            if (this.state.sticky === false) {
                return (
                    <div className="stiky" >
                        <i className="fas mobie-nav-icon fa-bars" onClick={() => this.stickyClick()} />
                    </div>
                )
            }
        }

    }
    stickyClick = () => {
        this.setState({
            sticky: !this.state.sticky
        })
    }
    /* phan chuyen link */
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        this.setState({
            pointScroll: winScroll,
        })
    }
    resetLink = () => {
        window.scrollTo(0, 0);
    }
    // phan goi y thanh search 
    getDataToStore = (giatri) => {
        this.props.getDataProduct(giatri);
        this.form.reset();
        this.setState({
            statusSuggest: false
        })
    }
    options = () => this.state.arrSuggest.map((value, key) => {
        return (
            <li key={key} onClick={(giatri) => this.getDataToStore(value)}>
                <Link to="/ProductDetail">
                    {/* {value.name} */}
                    <img src={value.image} className="image_suggest" alt="abc" />
                    <p className="image_suggest">{value.name}</p>
                </Link>
            </li>
        )
    })
    listSuggest = () => {
        if (this.state.statusSuggest) {
            return (
                <ul className="suggest">
                    {this.options()}
                </ul>
            )
        }
    }
    isChange = (event) => {
        var ten = event.target.value;
        var arrSearch = [];
        this.state.arrData.forEach((item) => {
            if (item.name.toLowerCase().indexOf(ten.toLowerCase()) !== -1) {
                arrSearch.push(item);
            }
            this.setState({
                arrSuggest: arrSearch
            })
        })
        if (ten || this.state.arrSuggest.length !== 0) {
            this.setState({
                statusSuggest: true
            })
        }
        if (!ten || this.state.arrSuggest.length === 0) {
            this.setState({
                statusSuggest: false
            })
        }

    }
    // click vao sign-in 
    editstatusLogin = (giatri) => {
        // console.log(this.props.editstatusLogin);
        this.props.editStatusLogin();
        this.props.getStatusAcc(giatri);
    }
    // render info 
    showInfoUser = () => {
        if (this.state.displayInfo) {
            return (
                <div>
                    <div className="bg_info" />
                    <div className="info_user">
                        <img src="https://pm1.narvii.com/6729/8e14db5ae41d4d424f5f4212dbeebd37268ae10fv2_00.jpg" alt="" />
                        <h4>{this.props.datauser.name}</h4>
                        <h6>{this.props.datauser.email}</h6>
                        <ul>
                            <li><Link onClick={() => this.editShowInfo()} to="/InfoUserDetail">Thông tin cá nhân</Link></li>
                            <li onClick={() => this.props.editsstLoginUser()}>
                                <NavLink onClick={() => this.resetLink()} to="/Home">Log out</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
    editShowInfo = () => {
        this.setState({
            displayInfo: !this.state.displayInfo
        })

    }
    // lay so luong don hang

    numberProduct = () => {

        noteData.on('value', (dataUser) => {
            dataUser.forEach(element => {
                if (element.val().email === this.props.datauser.email) {
                    infoUser.push(element.val())
                }
            })
        })

        product_List = infoUser[infoUser.length - 1].product.split(" ");
        return product_List.length - 2;
    }
    //render user

    checkLoginUser = () => {
        if (this.props.sttLoginUser) {
            return (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Language</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="/">English</a>
                            <a className="dropdown-item" href="/">Vietnamese</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/InfoUserDetail">
                            <p className="icon-shopping">{this.numberProduct()}</p>
                        </Link>

                    </li>
                    <li onClick={() => this.editShowInfo()} className="nav-item">
                        <img src="https://pm1.narvii.com/6729/8e14db5ae41d4d424f5f4212dbeebd37268ae10fv2_00.jpg" className="avt-user" alt="" />
                        {this.showInfoUser()}
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Language</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="/">English</a>
                            <a className="dropdown-item" href="/">Vietnamese</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <p onClick={(giatri) => { this.editstatusLogin("sign_in") }}>Sign in</p>
                    </li>
                    <li className="nav-item">
                        <p onClick={(giatri) => { this.editstatusLogin("sign_up") }}>Sign up</p>
                    </li>
                </ul>
            )
        }
    }
    render() {
        let className = "menu_head";
        if (this.state.pointScroll >= 300) {
            className += " menu_fixed";
        }
        if (this.state.pointScroll < 300) {
            className = "menu_head";
        }
        // console.log(this.props.datauser);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {/* gồm có : logo - search - language - login */}
                    <NavLink to="/Home"><img src={logo} alt="logo" className="logo" /></NavLink>
                    <div className="search">
                        <form className="form-inline my-2 my-lg-0" ref={form => this.form = form}>
                            <input className="form-control mr-sm-2"
                                type="text" onChange={(event) => this.isChange(event)}
                                placeholder="Search" />
                            {this.listSuggest()}
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><NavLink to="/Home"><i className="fas fa-search" /></NavLink></button>
                        </form>
                    </div>
                    {this.hidden_menu()}
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        {this.checkLoginUser()}
                    </div>
                    <div className="nav-item">
                        <p className="icon-shopping-bottom" onClick={() => this.resetLink()}><i className="fas fa-chevron-up"></i></p>
                    </div>
                </nav>

                <div className={className}>
                    {/* gồm có 6 li : Trang chủ - Laptop - SmartPhone - Watch - blog - contact  */}
                    <ul>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/Home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/Laptop">Laptop</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/SmartPhone">SmartPhone</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/Watch">Watch</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/Blogs">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.resetLink()} to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        statusLogin: state.statusAcc,
        sttLoginUser: state.sttLoginUser,
        datauser: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /* cung cấp dữ liệu cho hàm search để chuyển qua component Detail */
        getDataProduct: (dataProduct) => {
            dispatch({
                type: "GET_DATA_PRODUCT",
                dataProduct
            })
        },
        /* chuyển trạng thái hiển thị */

        editStatusLogin: () => {
            dispatch({
                type: "DISPLAY_LOGIN"
            })
        },
        /* gửi giá trị sign in hay sign up cho store để hiển thị cửa sổ */
        getStatusAcc: (statusAccount) => {
            dispatch({
                type: "CHECK_STATUS_ACC",
                statusAccount
            })
        },
        editsstLoginUser: () => {
            dispatch({
                type: "EDIT_STATUS_LOGIN"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
