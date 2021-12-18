import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import CartItem from '../components/CartItem';

const Cart = () => {

    
    return (
    <Body>
        <Grid is_container='is_container'>
        <CartWrap>
            <div className='cart-item'><CartItem/></div>
            <div className='cart-nav'>
                <div className='total-price-wrap'>
                <text className='total-price'>총 상품금액</text>
                <text className='cart-price'>41,900원</text>
                </div>
                <div className='delivery-price-wrap'>
                <text className='delivery-price'>총 배송비</text>
                <text className='delivery-total-price'>+ 0원</text>
                </div>
                <div className='sale-price-wrap'>
                <text className='sale-price'>총 할인금액</text>
                <text className='sale-total-price'>+ 0원</text>
                </div>
                <div className='payment-price-wrap'>
                <text className='payment-price'>결제금액</text>
                <text className='payment-total-price'>36,900원</text>
                </div>
                <div className='purchase-btn'>
                <text>구매하기</text>
            </div>
            </div>
            
            </CartWrap>
        </Grid>
    </Body>
    );
};

export default Cart;

const Body = styled.body`
    width: 100vw;
    height: 100vh;
    background-color:#F5F5F5 ;
    
`
const CartWrap = styled.div`
    display: flex;
    justify-content: space-between;
    .cart-item{
        margin-top: 50px;
    }
    .cart-nav{
        width: 331px;
        height: 205px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid #F7EFEF;
        margin: 50px 25px 0px 0px;
        .total-price-wrap{
            display: flex;
            justify-content: space-between;
            margin: 0px 10px 10px 10px;
            padding-top: 20px;
            .total-price{
            color: #8D857F;
            font-size: 15px;
            }
            .cart-price{
                color: black;
                font-size: 20px;
                font-weight: bold;
            }
        }
        .delivery-price-wrap{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            margin: 0px 10px 10px 10px;
            .delivery-price{
            color: #8D857F;
            font-size: 15px;
            }
            .delivery-total-price{
                color: black;
                font-size: 20px;
                font-weight: bold;
            }
        }
        .sale-price-wrap{
            display: flex;
            justify-content: space-between;
            margin: 0px 10px 20px 10px;
                .sale-price{
                color: #8D857F;
                font-size: 15px;
            }
                .sale-total-price{
                color: black;
                font-size: 20px;
                font-weight: bold;
            }
        }
        .payment-price-wrap{
            display: flex;
            justify-content: space-between;
            align-items: end;
            margin: 0px 10px 10px 10px;
            .payment-price{
            color: black;
            font-size: 20px;
            font-weight: bold;

            }
            .payment-total-price{
                color: black;
                font-size: 20px;
                font-weight: bold;

            }
        }
        .purchase-btn{
            margin-top: 50px;
            width: 331px;
            height: 53px;
            border-radius: 5px;
            background-color: #35c5f0;
            line-height: 53px;
            text-align: center;
            cursor: pointer;
            &:hover {
            background-color: #31b4db;
            } 
            text{
                color: white;
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
`