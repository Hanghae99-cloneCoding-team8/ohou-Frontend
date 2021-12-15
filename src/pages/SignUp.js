import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
    return (
        <SignUpWrap>
            <div className='SignWrap'>
                <h1>회원가입</h1>
            </div>
        </SignUpWrap>
    );
};

export default SignUp;
const SignUpWrap = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%; 
  margin-left: -150px;
  top: 50%; 
  margin-top: -150px;
  .SignWrap{
    text-align: left;
      h1{
      }
  }
`