import React from "react";
import styled from "styled-components";
import ProductDetail from "../components/ProductDetail";
import { useState } from "react";
import axios from "axios";

const PostDetail = (props) => {
  const [itemDetail, setDetail] = useState({});
  const [imgIdx, setImgIdx] = useState(0);
  const [colorIdx, setColorIdx] = useState();
  const [sizeIdx, setSizeIdx] = useState();
  
  const productsId = props.match.params.id;
  const store = [{
    brandName: `${itemDetail.brandName}`,
    title: `${itemDetail.title}`,
    price: itemDetail.price && `${(itemDetail.price).toLocaleString()}`,
    color: `${colorIdx}`,
    size: `${sizeIdx}`,
  }];


  const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  const getProductDetail = () => {
    axios
      .get(`http://3.37.61.109/api/products/${productsId}`)
      .then((response) => {
        setDetail(response.data);
      });
  };
  React.useEffect(() => {
    getProductDetail();
  }, []);


  return (
    <>
      <PostDetails>
        <div className="itme-img-overview">
          <ul className="item-img-list">
            <div>
              {itemDetail.images &&
                itemDetail.images.map((i, idx) => {
                  return (
                    <div
                      key={itemDetail.id}
                      className="item-img"
                      onMouseOver={() => setImgIdx(idx)}
                    >
                      <img alt="상품이미지" src={i} />
                    </div>
                  );
                })}
            </div>
          </ul>
          <div className="item-cover-img">
            <img
              alt="상품"
              src={itemDetail.images && itemDetail.images[imgIdx]}
            />
          </div>
        </div>

        <div className="item-content">
          <div className="item-content-overview">
            <div className="item-content-company">{itemDetail.brandName}</div>
            <div className="item-content-name">{itemDetail.title}</div>
            <div className="item-content-review">
              {/* //리뷰갯수받아오기 */}
              <span> 10개 리뷰</span>
            </div>

            <div className="item-price-info">
              <div className="price-discount-rate">
                {itemDetail.discountRate}
                <span>%</span>
              </div>
              <div className="item-price">
                <span>{itemDetail.price?.toLocaleString()}원</span>
              </div>

              <div className="item-delivery-info">
                <div className="item-delivery-type">
                  배송
                  <span className="free-delivery">무료배송</span>
                </div>
                <h5 style={{ color: "#757575", padding: "0px 37px" }}>
                  제주도/도서산간 지역 3000원
                </h5>
              </div>
            </div>

            <div className="company">{itemDetail.brandName}</div>
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

              <div className="option-price-box">
                <span>주문금액</span>
                <div className="price-final">
                  <span>{itemDetail.price?.toLocaleString()}</span>원
                </div>
              </div>
              <div className="item-buy-option">
                <button
                  onClick={() => ( colorIdx && sizeIdx ? setStorageItem(`${productsId}`, store): alert("옵션 선택후에 버튼을 클릭해 주세요.") )}
                  className="cart"
                >
                  장바구니
                </button>
                <button className="buy">바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </PostDetails>
      <ProductDetail />
    </>
  );
};

const PostDetails = styled.div`
  max-width: 1192px;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  .itme-img-overview {
    display: flex;
    margin-right: 30px;
  }
  .item-img-list {
    width: 56px;
    margin-right: 10px;
  }
  .item-img {
    width: 56px;
    height: 56px;
    margin-bottom: 10px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
      border: 2px solid #35c5f0;
      border-radius: 10px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .item-cover-img {
    width: 475px;
    height: 475px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .item-content {
    width: 437px;
    .option-box {
      .selectbox-option {
        width: 378px;
        margin: 4px 0px 4px 10px;
        padding: 8px 0px 8px 12px;
      }
    }
    .order-info-box {
      width: 381px;
      margin: 8px 0px 8px 8px;
      padding: 10px 10px;
      background-color: #f5f5f5;
      .order-info-text {
        font-size: 13px;
        line-height: 20px;
        color: #424242;
      }
    }
  }

  .item-content-overview {
    width: 437px;
  }

  .item-content-company {
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 10px;
    color: #656e75;
  }
  .item-content-name {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 22px;
  }
  .item-content-review {
    display: flex;
    margin-top: 8px;
    margin-left: 10px;
    color: black;
    font-size: 20px;
    font-weight: 600;
    color: #35c5f0;
    span {
      margin-left: 10px;
      padding-top: 3px;
      font-size: 14px;
    }
  }
  .item-price-info {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    .price-discount-rate {
      margin-left: 10px;
      padding: 0px 10px;
      font-size: 15px;
      color: black;
    }

    .item-price {
      padding: 5px;
      margin-left: 10px;
      font-size: 32px;
      font-weight: bold;
    }
    .item-delivery-info {
      margin-left: 10px;
      margin-top: 13px;
      padding: 13px 10px;
      border-top: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      .item-delivery-type {
        margin-bottom: 8px;
        color: #838c94;
        font-size: 13px;
        .free-delivery {
          margin: 10px 10px 10px 10px;
          width: 50px;
          height: 20px;
          background-color: #fff;
          text-align: center;
          line-height: 20px;
          font-size: 13px;
          color: black;
          border-radius: 5px;
        }
      }
    }
  }
  .company {
    height: 46px;
    padding: 12px 20px;
    color: #525b61;
    font-weight: 800;
    font-size: 15px;
    line-height: 21px;
  }
  .option-price-box {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 13px;
    font-weight: bold;
  }
  .price-final {
    font-size: 20px;
    font-weight: bold;
  }
  .item-buy-option {
    display: flex;

    margin: auto;
    margin-top: 20px;

    button {
      width: 100%;
      height: 55px;
      margin: 0px 10px 0px 10px;
      padding: 13px 10px 14px;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    .cart {
      border: 1px solid #35c5f0;
      color: #35c5f0;
      font-size: 18px;
      font-weight: 700;
    }
    .buy {
      border: none;
      background-color: #35c5f0;
      color: white;
      font-size: 17px;
      font-weight: 700;
      &:hover {
        background-color: rgb(79, 170, 214);
      }
    }
  }
`;
export default PostDetail;
