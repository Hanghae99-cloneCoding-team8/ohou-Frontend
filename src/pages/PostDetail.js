import React from "react";
import styled from "styled-components";

const PostDetail = () => {
  
  //리덕스 쓰지않고 아이템 상세정보 가져오기
  //map함수
  
    return (
    <PostDetails>
        <div className="itme-img-overview">
            <ul className="ite-img-list">
            <div
                   
                    className="item-img"
                    // onMouseOver={() => ()}
                  >
                    <img alt="상품이미지" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/163635158689572498.jpg?gif=1&w=1280&h=1280&c=c" />
                  </div>
            </ul>
            <div className="item-cover-img">
            {/* {selectdItem.product && ( */}
              <img alt="상품" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/163635158689572498.jpg?gif=1&w=1280&h=1280&c=c" />
          </div>
        </div>

        <div className="item-content">
            <div className="item-content-cverview">
                
            </div>
        </div>
    </PostDetails>
    );




};



const PostDetails = styled.div`
  display: flex;
  width: 1136px;
  margin: 0 auto;
  margin-top: 50px;
  .itme-img-overview {
      display: flex;
      margin-right: 30px;}
  .item-img-list{
    width: 56px;
     margin-right: 10px;}
.item-img {
          width: 56px;
          height: 56px;
          margin-bottom: 10px;
          cursor: pointer;
          margin-right:5px;
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
      width: 437px;}

      .item-content-overview {
        width: 437px;}

    .itemContentCompany {
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: bold;
          color: red;
        }
`;
export default PostDetail;
