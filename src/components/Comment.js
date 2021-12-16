import React from 'react';
import Grid from '../elements/Grid';
import styled from 'styled-components';

const Comment = () => {
    return (
        <Grid is_container="is_container">
        <ReviewWrap>
            
                <div className='comment-wrap'>
                    <div className='review-header'>
                        <h4>상품 리뷰</h4>
                        <div className='input-wrap'>
                            <div className='input-id'>
                                <input placeholder='아이디'/>
                            </div >
                            <div className='input-pw'>
                                <input placeholder='비밀번호'/>
                            </div>
                        </div>
                    </div>
                    <div className='comment-input-wrap'>
                        <textarea className='comment-input' placeholder='당신의 생각을 표현해보세요.'/>
                        <div className='btnwrap'>
                            <button className='addbtn'>
                                작성
                            </button>
                        </div>
                    </div>
                    <div className='comment-write-wrap'>
                        <div className='comment-write-title'>
                            <p>댓글1개</p>
                            <hr/>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                            <div className='user-commet-wrap'>
                                <div className='usertime'>
                                    <text
                                        style={{
                                            fontSize: '15px',
                                            fontStyle: 'bold',
                                            marginRight: "10px"
                                        }}>username</text>
                                    <text
                                        style={{
                                            fontSize: '10px'
                                        }}>6시간전</text>
                                </div>
                                <div className='user-comment'>
                                    <text>망한집입니다</text>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>

                </div>

            
        </ReviewWrap>
        </Grid>
    );
};

export default Comment;

const ReviewWrap = styled.div `
    margin-top: 30px;
    max-width: 800px;
    padding-right:100px;
    .comment-wrap{
        .review-header{
            display: flex;
            justify-content: space-between;
            h4{
                color:#35c5f0;
            }
            .input-wrap{
                display: flex;
                .input-id{
                    margin-right: 20px;
                }
                input{
                    border-radius: 10px;
                    border: 1px solid #bbb;
                    padding: 3px 5px ;
                    margin-bottom:20px;
                }
                input:focus {outline:none}
            }
        }
        .comment-input-wrap{
            margin-bottom: 50px;
            .comment-input{
                color: balck;
				resize: none;
				outline: none;
				border: 1px solid #bbb;
				border-radius: 5px 5px 0px 0px;
				padding: 10px;
				width: 100% !important;
				flex: 1;
				background-color: white;
				min-height: 80px;
            }
            .btnwrap{
                border: 1px solid #35c5f0;
                padding: 5px;
                border-radius : 0px 0px 5px 5px;
                margin-top: -10px;
                background-color: #35c5f0;
                display: flex;
                justify-content: flex-end;
                .addbtn{
                    border: 0;
                    background-color: #35c5f0;
                    color: white;
                    padding: 7px 12px 5px 12px;
                    height: 35px;
                    border-radius: 3px;
                    font-size: 14px;
                    }
                }
            }
            .comment-write-wrap{
                    margin-bottom:50px;
                    .commet-write-title{
                        
                            .user-commet-wrap{
                                
                                    .usertime{
                                            margin-bottom: 20px;
                                             display: flex;
                        }
                    }
                }
            }
        }
`