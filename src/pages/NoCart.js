import React from 'react';
import styled from 'styled-components';
import cartlogo from '../static/cartlogo.png'
import { history } from '../redux/configureStore';



const Cart = () => {
    return (
        <CartWrap>
            <div className='cart-img-btn-wrap'>
                <img src={cartlogo} alt=''/>
                <button onClick={()=>history.push('/')}>상품 담으러 가기</button>
            </div>
        </CartWrap>
    );
};

export default Cart;

const CartWrap = styled.div`
    .cart-img-btn-wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 160px;
            height: 120px;
            margin-bottom: 20px;
            margin-top: 25vh;
        }
        button{
            border: 0;
            width: 220px;
            height: 50px;
            color: white;
            background-color: #35c5f0;
            font-weight: bold;
            border-radius: 5px;
            font-size: 17px;
            cursor: pointer;
            &:hover {
            background-color: #31b4db;
            } 
        }
    }
`