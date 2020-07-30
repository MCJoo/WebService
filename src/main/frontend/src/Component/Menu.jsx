import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/YRB_logo.png';
import {Button, Nav, Navbar, Form} from 'react-bootstrap';
import Login from '../Pages/Login'
import $ from 'jquery';

class Menu extends Component{

    componentDidMount(){
        $(document).ready(function(){
            $('#Menu_ChatBotService').hover(
                function(){$('#dropDown_ChatBotService').stop(true,true).fadeIn();},  //hover시 dropdown 나타남
                function(){$('#dropDown_ChatBotService').stop(true,true).fadeOut();})   //hover 해제 시 dropdown 사라짐
        });
    }

    render(){
        return (
            <div id="Header">
                <Navbar className="Header_Navbar" style={{padding:"0 16px", display:"flex", justifyContent:"center"}} variant="dark">
                    <Link to="/">
                        <img className="Header_logo" style={{width: "50px", height: "50px"}} src={logo} alt="yrb 로고"/>
                    </Link>
                    <div className="Menu_Container">
                        <Link to="/ChatBotIntro" className="ReactRouterDom_Link" style={{margin:"0 30px"}}>
                            <div className="Menu" id="Menu_ChatBotService">ChatBot Service
                                <div className="dropDownMenu_Wrapper" id="dropDown_ChatBotService">
                                    <ul className="dropDownMenu">
                                        <li><Link to="/ChatBotIntro" style={{textDecoration:"none", color:"white"}}>
                                                <div className="dropDown_div">
                                                    <div><img src={logo} alt="챗봇 인트로 로고"></img></div>
                                                    <div style={{height:"30px", marginTop:"4px"}}><span style={{fontSize:"20px"}}>챗봇 인트로</span></div>
                                                </div>          
                                            </Link>
                                        </li>
                                        <li><Link to="/ChatBotDemo" style={{textDecoration:"none", color:"white"}}>
                                                <div className="dropDown_div">
                                                    <div><img src={logo} alt="챗봇 인트로 로고"></img></div>
                                                    <div style={{height:"30px", marginTop:"4px"}}><span style={{fontSize:"20px"}}>챗봇 데모</span></div>
                                                </div>      
                                            </Link>
                                        </li>
                                    </ul>                            
                                </div>
                            </div>
                        </Link>
                        <Link to="/MemberIntro" className="ReactRouterDom_Link" style={{margin:"0 30px"}}>
                            <div className="Menu_MemberIntro Menu">Member Introduction</div>
                        </Link>
                    </div>
                    {/* <Form inline>
                        <Button variant="outline-info" onClick={() => setModalShow(true)} style={{margin: "10px"}}><Link to="/Login">로그인</Link></Button>
                        <Link to ="/MyPage"><Button variant="outline-info">나의 정보</Button></Link>
                    </Form> */}
                </Navbar>
                {/* <Login
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
            </div>
        );
    }
}

export default Menu;