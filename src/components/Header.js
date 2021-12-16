import React from 'react';
import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';
import logo from '../static/logo.svg'
import {history} from '../redux/configureStore';






const Header = () => {


  return (
    <React.Fragment>
      <HeaderBox>
        <div className="inside-box">
          <div className='navbar-logo-wrap'>
                        <a class='navbar-logo' href='/'>
                            <img src={logo} alt=''/>
                        </a>
                        </div>  
          <MenuItemBox>
            <li className="menu-item" onClick={()=>{history.push('/login')}}>커뮤니티</li>
            <li className="menu-item">스토어</li>
            <li className="menu-item">인테리어시공</li>
          </MenuItemBox>

          <div className="icon-box" size="lg">
            <BsCart style={{ fontSize: "22px", fontWeight: "700" }} />
          </div>
        </div>
      </HeaderBox>
    </React.Fragment>
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
  justify-content:center;

  .inside-box {
    display: flex;
    width: 1180px;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
    margin: 0px 55.3px;
    .navbar-logo-wrap{
         width: 74px;
        height: 30px;
            .navbar-logo{
            }
    }
  }
  .icon-box {
    padding: 4px;
    border: 1px solid white;
    background-color: white;
    width: 33px;
    height: 33px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #35c5f0;
      color: white;
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
