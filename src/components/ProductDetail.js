import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import toggleLogo from "../static/toggleLogo.svg";

const ProductDetail = (props) => {
  return (
    <>
      <NavBar>
        <div className="navbar">
          <li className="nav-item">상품정보</li>
          <li className="nav-item">리뷰</li>
          <li className="nav-item">문의</li>
          <li className="nav-item">배송/환불</li>
          <li className="nav-item">추천</li>
        </div>
      </NavBar>
      <Wrap>
        <Grid is_flex is_container>
          <div className="product-selling-detail">
              <div>
                <center>
                    
                </center>
              </div>
          </div>
          <div className="product-selling-detail-sidebar">
              <div>
                <select class="dropdown">
                <option value="" disabled="">
                    컬러
                </option>
                <option value="0">
                    빨강
                </option>
                <option value="1">
                    파랑
                </option>
                <option value="2">
                    노랑
                </option>
                </select>
                <select class="dropdown">
                <option value="" disabled="">
                    사이즈
                </option>
                <option value="0">
                    S
                </option>
                <option value="1">
                    M
                </option>
                <option value="2">
                    L
                </option>
                </select>
                <toggleLogo/>
              </div>
          </div>
        </Grid>
      </Wrap>
    </>
  );
};

const NavBar = styled.div`
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(237, 237, 237);
  border-bottom: 1px solid rgb(237, 237, 237);
  .navbar {
    align-items: left;

    display: block;
    width: 66.6666%;
    display: flex;
    padding: 0px 60px;
    margin: 0px 200px;
  }
  .nav-item {
    width: 132.5px;
    margin: -1px 0px 0px -1px;
    padding: 17px 10px 15px;
    position: relative;
    display: block;
    top: 1px;
    box-sizing: border-box;
    text-align: center;
    line-height: 20px;
    font-weight: 700;
    border-color: transparent transparent rgb(237, 237, 237) rgb(237, 237, 237);
    transition: color 0.1s ease 0s;

    &:hover {
      color: rgb(53, 197, 240);
      border-bottom: 3px solid rgb(53, 197, 240);
      z-index: 1;
    }
  }
`;
const Wrap = styled.div`
    
  .product-selling-detail {
    width: 770px;
    padding: 0px 10px;
    height: auto;
    display: block;
    max-width: 100% !important;
  }

  .product-selling-detail-sidebar {
    padding: 0px 10px;
    position: fixed;
    box-sizing: border-box;
    height: 911.674px;
    width: 365.33px;
    top: 136.326px;
  }
  .dropdown {
      
      padding : 0px 30px 0px 15px;
      margin-bottom: 10px;
      width: 300px;
      height: 40px;
      .focus{
        border-color: rgb(53, 197, 240);
      }
   
  }
`;

export default ProductDetail;
