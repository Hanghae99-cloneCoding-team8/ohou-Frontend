import React from 'react';
import styled from 'styled-components';
import x from '../static/clear.svg'
import { useState } from 'react';

const CartItem = () => {


const [cartItem,setCartItem] = useState([]);


      const getProducts= () => {
        let array=[];
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let getKey = JSON.parse(localStorage.getItem(key));
            array.push(getKey);
            setCartItem(array);
            };
      };

      React.useEffect(() => {
        getProducts();
      }, []);

    return (
        <>   
        {cartItem && cartItem.map((c, idx) => {
              return (
                <CartItemWrap key={cartItem[idx].productsId}>
            <div className='cart-title-wrap'>
                <h1>{cartItem[idx].brandName}</h1>
            </div>

            <div className='cart-body-wrap'>
                <div className='img-item-wrap'>
                    <img className='item-img'src={cartItem[idx].images} alt=''/>
                    <div className='title-delivery-wrap'>

                        <text className='title-name'>{cartItem[idx].brandName}</text>
                        <img src={x} alt='' style={{cursor: "pointer"}} />
                        {/* onClick={()=>cartItem[idx] && localStorage.removeItem('cartItem[idx]')} */}
                        <text >무료배송 | 일반택배</text>
                    </div>
                </div>

                <div className='option-item-wrap'>
                    <div className='option-title'>
                        <text>{cartItem[idx].color} + {cartItem[idx].size}</text>
                    </div>
                    <div className='select-totalprice-wrap'>
                        <select className='select-wrap'  >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        {/* 끔찍한 혼종코드.. */}
                        <text className='total-price'>{cartItem[idx].price}원</text>
                    </div>
                </div>
            </div>

            <div className='cart-footer-wrap'>
                <h1>배송비 무료</h1>
            </div>
        </CartItemWrap>
              );
            })}
        </>
    );
};

export default CartItem;

const CartItemWrap = styled.div`
margin: 10px 0px;
.cart-title-wrap{
            display: flex;
            width: 695px;
            height: 42px;
            background-color: white;
            border: 1px solid #F7EFEF;
            border-radius: 5px 5px 0px 0px;
            justify-content: center;
            align-items: center;
            position: relative;
            h1{
                font-size: 20px;
            }
        }
    .cart-body-wrap{
        position: relative;
        display: flex;
        width: 695px;
        height: 200px;
        background-color: white;
        border: 1px solid #F7EFEF;
        justify-content: space-between;
        flex-direction: column;
        .img-item-wrap{
            display: flex;
            margin: 20px 0px 0 20px;
            .item-img{
                width: 70px;
                height: 70px;
                margin: 0 10px 0 20px;
                
            }
            .title-delivery-wrap{
                display: flex;
                flex-direction: column;
                .title-name{
                    font-size: 20px;
                    margin-bottom: 20px;
                    width: 500px;
                    }
                    img{
                        position: absolute;
                        right: 20px;
                }
                text{
                    font-size: 10px;
                }
            }
        }
            img{
                width: 12px;
                height: 12px;
                margin: 10px 10px 0 0 ;
            }
            
    .option-item-wrap{
        width: 624px;
        height: 74px;
        background-color: #F5F5F5;
        margin: 0 auto;
        border-radius: 5px;
        margin-bottom: 10px;
        .option-title{
            margin: 10px 0px 10px 20px;
        }
        .select-totalprice-wrap{
            display: flex;
            justify-content: space-between;
            .select-wrap{
                margin-left: 20px;
                width: 80px;
            }
            .total-price{
                margin-right: 10px;
            }
        }
    }
    }
    .cart-footer-wrap{
        display: flex;
        width: 695px;
        height: 42px;
        background-color: white;
        border: 1px solid #F7EFEF;
        border-radius: 0px 0px 5px 5px;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 20px;
        }
    }
 `