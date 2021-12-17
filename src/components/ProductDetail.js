import React from "react";
import styled from "styled-components";
import Comment from "./Comment"
import { useState } from "react";


const ProductDetail = ({itemDetail}) => {
  
  const [colorIdx, setColorIdx] = useState();
  const [sizeIdx, setSizeIdx] = useState();
  
  const store = [
    {
      brandName: `${itemDetail.brandName}`,
      title: `${itemDetail.title}`,
      price: itemDetail.price && `${itemDetail.price.toLocaleString()}`,
      color: `${colorIdx}`,
      size: `${sizeIdx}`,
    },
  ];

  const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  };



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
            {itemDetail.details &&
                itemDetail.details.map((i, idx) => {
                  return (
                    <div
                      key={i.id}
                      className="item-img">
                      <img alt="상품이미지" src={i} />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="product-selling-detail-sidebar">
            <div>
            <div className="option-box">
              <div
                style={{
                  padding: "20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {itemDetail.option && (
                  <select
                    onChange={(e) => {
                      setColorIdx(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="selectbox-option"
                  >
                    <option value="" disabled>
                      컬러
                    </option>
                    {itemDetail.option[0].detail.map((color, idx) => {
                      return (
                        <option key={idx + "color"} value={color} name="color">
                          {color}
                        </option>
                      );
                    })}
                  </select>
                )}

                {itemDetail.option && (
                  <select
                    type="select option"
                    onChange={(e) => {
                      setSizeIdx(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="selectbox-option"
                  >
                    <option value="" disabled>
                      사이즈
                    </option>
                    {itemDetail.option[1].detail.map((size, idx) => {
                      return (
                        <option key={idx + "size"} value={size} name="size">
                          {size}
                        </option>
                      );
                    })}
                  </select>
                )}
                {colorIdx && sizeIdx && (
                  <div className="order-info-box">
                    <div>
                      <span className="order-info-text">
                        컬러: {colorIdx} / 사이즈: {sizeIdx}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            
            <div className="price" style={{display:"flex" ,justifyContent:"space-between"}}>
              주문금액 

              <div>
                <h3>{itemDetail.price?.toLocaleString()}원</h3>
              </div>
              
            </div>
            <div className="btn">
              <button onClick={() =>
                    colorIdx && sizeIdx
                      ? setStorageItem(`${itemDetail.id}`, store)
                      : alert("옵션 선택후에 버튼을 클릭해 주세요.")
                  }
                  className="cart-btn">장바구니</button>  
              <button className="buy-btn">바로구매</button>
            </div>
            
          </div>
        </div>
      </Wrap>
      <Comment/>
    </>
  );
};

const NavBar = styled.div`
  margin:40px 0px;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(237, 237, 237);
  border-bottom: 1px solid rgb(237, 237, 237);
  position:sticky;
  top:80px;

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

  
  .product-selling-detail-sidebar {
    padding: 20px 30px;
    position:sticky;
    box-sizing: border-box;
    top:0px;
    height:581px;
   
    @media screen and (max-width: 1029px) {
    display:none;
    }
    .price {
    position: fixed;
    bottom: 0;
    width:200px;
    color: black;
    margin-bottom:70px; 
    text-align: right !important;
  }
  .price  {
    margin-bottom: 150px;
    text-align: right !important;
  }
 
  .order-info-box {
      width: 285px;
      margin: 8px 0px 8px 0px;
      padding: 10px 10px;
      background-color: #f5f5f5;
      .order-info-text {
        font-size: 13px;
        line-height: 20px;
        color: #424242;
      }
    }
    .btn{
      position: sticky;
    width:280px;
    bottom: 0px;
    margin-bottom: 50px;
    color: white;
    text-align: center;
    .cart-btn{
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
  .buy-btn{
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
  }
 
  .selectbox-option {
    padding: 0px 30px 0px 15px;
    margin-bottom: 10px;
    width: 20vw;
    height: 40px;
    .focus {
      outline: none;
      color: #35c5f0;
        }
      }
  }
 
`;
ProductDetail.defaultProps ={
  images : "",
  price : "57000",
   
}
export default ProductDetail;
