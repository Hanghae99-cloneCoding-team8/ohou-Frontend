import React from "react";
import styled from "styled-components";



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
          <div className="product-selling-detail">
            <div>
              <p>
                  <img alt="" src="https://exit.ohou.se/bd5b6a20646852927da17d0a7d52df9bd5c8f826/basictone.co.kr/web/upload/detail/211011_raschel/som_test_01.jpg"/>
              </p>
            </div>
          </div>

          <div className="product-selling-detail-sidebar">
            <div>
              <select class="dropdown">
                <option value="" disabled="">
                  컬러
                </option>
                <option value="0">빨강</option>
                <option value="1">파랑</option>
                <option value="2">노랑</option>
              </select>
              <select class="dropdown">
                <option value="" disabled="">
                  사이즈
                </option>
                <option value="0">S</option>
                <option value="1">M</option>
                <option value="2">L</option>
              </select>
            </div>

            
            <div className="temp-price" style={{display:"flex" ,justifyContent:"space-between"}}>
              주문금액 

              <div>
                <h3>{props.price} 원</h3>
              </div>
              
            </div>
            <div className="temp-btn">
              <button className="button-1">장바구니</button>  
              <button className="button-2">바로구매</button>
            </div>
            
          </div>
        
      </Wrap>
    </>
  );
};

const NavBar = styled.div`
  margin-top:20px;
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
  display: flex;
  height : auto;
  margin:0 15%;
  

  .product-selling-detail {
    
    width: 1500px;
    padding: 0px 20px;
    height: auto;
    display: block;
    /* max-width: 100% !important; */
  }

  .product-selling-detail img{
      width:100%;
      height:100%;
      object-fit:cover;

  }

  .temp-price {
    position: fixed;
    bottom: 0;
    width:250px;
    color: black;
    text-align: center;
    margin-bottom:70px;
  }
  .temp-price  {
    text-align: right !important;
  }
  .temp-btn{
    
    position: fixed;
    bottom: 0;
    
    color: white;
    text-align: center;
  }
  .button-1{
    padding : 13px 10px 14px; 
    width: 116px;
    height: 55px;
    margin: 10px 20px 10px 0px;
    background-color: white;
    border: 1px solid #35c5f0;
    border-radius:5px;
    color : #35c5f0;
    cursor:pointer;
    font-weight: 700;
    font-size:1.1em;
  }
  .button-2{
    font-size:1.1em;
    font-weight: 700;
    cursor:pointer;
    border-radius:5px;
    color:#fff;
    border: 1px solid transparent;
    background-color: #35c5f0;
    padding : 13px 10px 14px; 
    width: 116px;
    height: 55px;
  }


  .product-selling-detail-sidebar {
    padding: 20px 30px;
    position:sticky;
    box-sizing: border-box;
    top:0px;
    height:503px
  }
  .dropdown {
    padding: 0px 30px 0px 15px;
    margin-bottom: 10px;
    width: 20vw;
    height: 40px;
    .focus {
      outline: none;
      color: #35c5f0;
    }
  }
`;
ProductDetail.defaultProps ={
  images : "",
  price : "57000",
   
}
export default ProductDetail;
