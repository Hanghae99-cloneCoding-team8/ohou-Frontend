import React from 'react';
import styled from 'styled-components';

const PwBtn = () => {
    return (
        <PwInputWrap>
            <div className='input-wrap'>
                            <div className='input-pw'>
                                <input placeholder='비밀번호'/>
                                <button>삭제</button>
                                <button>수정</button>
                            </div>
                        </div>
        </PwInputWrap>
    );
};

export default PwBtn;

const PwInputWrap = styled.div`
.input-wrap{
    display: flex;
    input{
        border-radius: 10px;
        border: 1px solid #bbb;
        padding: 3px 5px ;
        margin-bottom:20px;
    }
    input:focus {outline:none}
    button{
        width: 50px;
        border: 0px;
        background-color: #35c5f0;
        margin-left: 5px;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #32b2d9;
        }
    }
}
`

