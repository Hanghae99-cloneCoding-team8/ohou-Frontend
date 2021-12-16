import React from 'react';
import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';
import logo from '../static/logo.svg'
import Grid from '../elements/Grid'
import { history } from '../redux/configureStore'




const Header = () => {

  return (
    
    
      <HeaderBox>
        <div className="inside-box">
          <div className='navbar-logo-wrap'>
                        <a class='navbar-logo' href='/'>
                            <img src={logo} alt=''/>
                        </a>
                        </div>  
          <MenuItemBox>
            <li className="menu-item">커뮤니티</li>
            <li className="menu-item">스토어</li>
            <li className="menu-item">인테리어시공</li>
          </MenuItemBox>

          <div className='icon-login-wrap'>
          <div className="icon-box">
            <BsCart style={{ fontSize: "22px", fontWeight: "700" }} />
          </div>  
          <div className='login-signup-wrap'>
            <li onClick={()=> history.push('/login')}>로그인</li>
            <div className='line'/>
            <li onClick={()=> history.push('/signup')}>회원가입</li>
            </div>
          </div>
           
        </div>
      </HeaderBox>
  );
};
const HeaderBox = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  margin-bottom: 20px;
  transition: top 0.1s;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  z-index: 502;
  justify-content: center;

  .inside-box {
    display: flex;
    width: 1180px;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
    margin: 0px 55.3px;
    align-items: center;
    .navbar-logo-wrap{
         width: 74px;
        height: 30px;
            .navbar-logo{
            }
    }
  }
.icon-login-wrap{
  display: flex;
  align-items: center;
  .icon-box {
    display: flex;
    padding: 4px;
    border: 1px solid white;
    background-color: white;
    width: 33px;
    height: 33px;
    border-radius: 20px;
    margin-right: 30px;
    cursor: pointer;
    &:hover {
      background-color: #35c5f0;
      color: white;
    } 
  }
  .login-signup-wrap{
      display: flex;
      align-items: center;
    li{
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;  
      &:hover {
        color: #35c5f0;
    } 
    }
}
  
    .line{
      height: 15px;
      width: 1px;
      background-color: #757575;
      margin: 0px 5px 0px 5px;
    }
  }
  
`;


const MenuItemBox = styled.div`
  display: block;

  .menu-item {
    position: relative;
    display: inline-block;
    margin: 6px 10px 0;
    padding: 14px 6px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    color: #424242;
    cursor: pointer;
    &:hover {
      color: #35c5f0;

    }
  }

  /* @media screen and (max-width : 768px) {
        display : none;
     } */
`;

export default Header;


