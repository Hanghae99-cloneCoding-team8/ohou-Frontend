import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Noimg from '../static/noimage_2.jpg'



const PostItem = (props) => {
    return (
        <Wrap>
            <Grid is_container="is_container">
                <div className="title-wrap">
                    
                </div>

                <div className='product-wrap'>
                    <a>
                        <div className="img-postd">
                            <img src={props.imgSrc} alt="이미지없음"/>
                        </div>
                        <div className='product-detail'>
                            <h1>
                                <p className='product-brand'>{props.brandName}</p>
                                <p className='product-title'>{props.title}</p>
                                <div className='rate-price-wrap'>
                                    <span className='product-rate'>{props.discountRate}%</span>
                                    <span className='product-price'>{(props.price).toLocaleString()}</span>
                                </div>
                                <span className='review-count'>리뷰 {props.reviewCount}</span>
                            </h1>
                        </div>
                    </a>
                </div>
            </Grid>
        </Wrap>
    );
};

export default PostItem;

const Wrap = styled.div `
  margin-bottom: 30px;
  .title-wrap {
      text{
        font-size: 15px;
      }
  }
  .product-wrap{
    .img-postd{
      img{
        width: 270px;
        height: 270px;
      }
    }
  }
  .product-detail{
    display: flex;
    flex-direction: column;
    .product-brand{
      font-size: 15px;
      color: #757575;
    }
    .product-title{
      font-size: 20px;
      color: #424242;
    }
    .rate-price-wrap{
      display: flex;
      align-items: center;
      .product-rate{
        font-size: 15px;
        margin-right: 5px;
        color:#35c5f0
      }
      .product-price{
        font-size: 20px;
      }
    }
    .review-count{
      font-size: 12px;
      color: #757575;
    }
  }

  
`;
