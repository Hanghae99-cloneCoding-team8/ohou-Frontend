import React from 'react';
import styled from 'styled-components';
import logo2 from '../static/logo2.svg'
import facbook from '../static/facebook.svg'
import kakao from '../static/kakao.svg'
import naver from '../static/naver.svg'

const Login = () => {
    return (
        <LoginWrap>
            <div className='login-page-wrap'>
                <img src={logo2} alt=""/>
                <div className='id-pw-input-wrap'>
                    <input className='id-input' placeholder='이메일'/>
                    <input className='pw-input' placeholder='비밀번호'/>
                </div>
                    <button>로그인</button>
            </div>
            <div className='signup'>
                <a>회원가입</a>
            </div>
            <section className='snslogin'>
                <div className='snslogin-title'>SNS계정으로 간편 로그인/회원가입</div>
                <div className='sns-icons'>
                    <img src={facbook} alt=''/>
                    <img src={kakao} alt=''/>
                    <img src={naver} alt=''/>
                </div>
            </section>
        </LoginWrap>
    );
};

export default Login;

const LoginWrap = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%; 
  margin-left: -150px;
  top: 50%; 
  margin-top: -150px;
    .login-page-wrap{
        img{
        width: 147px;
        height: 50px;
        margin-left: 22.5%;
        margin-bottom: 30px;
        }
        .id-pw-input-wrap{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
            input{
                width: 300px;
                height: 50px;
                padding: 13px 15px 14px;
                border: 1px solid #dc3545;
                border-radius: 4px;
            }
            input:focus {outline:none}
        }
        button{
            border: 0;
            width: 300px;
            height: 50px;
            color: white;
            font-weight: bold;
            line-height: 50px;
            border-radius: 4px;
            margin-bottom: 20px;
            border-color: #35c5f0;
            background-color: #35c5f0;
            &:hover{
                background-color: #32abcf;
                color: white;
            }
        }
    }
    .signup{
        text-align: center;
        margin-bottom: 20px;
            a{
                font-size: 12px;
            }
        }
    .snslogin{
        text-align: center;
        .snslogin-title{
            color: #757575;
            font-size: 12px;
            margin-bottom: 20px;
        }
        .sns-icons{
            display: flex;
            justify-content: space-between;
            padding-left: 18%;
            padding-right: 18%;
            img{
               width: 48px;
               height: 48px;

            }
        }
    }
`