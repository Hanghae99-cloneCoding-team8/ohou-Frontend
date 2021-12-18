
import React, {useState} from 'react';
import Grid from '../elements/Grid';
import styled from 'styled-components';
import {HiOutlinePencilAlt} from 'react-icons/hi'
import Modal from 'react-modal'
import PwBtn from './PwBtn';
import { actionCreators as commentActions } from '../redux/modules/comment';

const Comment = ({itemDetail}) => {
    const dispatch = useDispatch();
    const [content,setContent]= useState("");
    const [password,setPassword] = useState("");
    console.log(content);
    const addComment = (productId)=> {
        dispatch(commentActions.addCommentAction(content,password,productId));
    };
    const productId = itemDetail.id
  
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }


    return (
        <Grid is_container="is_container">
            <ReviewWrap>

                <div className='comment-wrap'>
                    <div className='review-header'>
                        <h4>상품 리뷰</h4>

                        <div className='input-wrap'>
                            <div className='input-pw'>
                                <input placeholder='비밀번호' onChange ={(e) =>{setPassword(e.target.value);}}/>
                            </div>
                        </div>
                    </div>
                    <div className='comment-input-wrap'>
                        <textarea className='comment-input' placeholder='당신의 생각을 표현해보세요.' 
                        onChange ={(e) =>{setContent(e.target.value);}}/>
                        <div className='btnwrap'>
                            <button className='addbtn' onClick={()=> {addComment(productId);}}>
                                작성
                            </button>
                        </div>
                    </div>
                    <div className='comment-write-wrap'>
                        <div className='comment-write-title'>
                            <p>댓글1개</p>
                            <hr/>
                            <div className='user-comment-wrap'>
                                <div className='user-time-btn'>
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

                                    <HiOutlinePencilAlt
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={openModal}/> {
                                        modalIsOpen && 
                                        <Modal isOpen={modalIsOpen} style={{content: { 
                                            border: "1px solid black", 
                                            borderRadius: "20px", 
                                            left: "63em", 
                                            right: "10em", 
                                            top: "50em", 
                                            bottom: "1.3em",
                            
                                             }, overlay:{
                                                backgroundColor:'none'
                                            },}}>
                                               <div className='pw-bnb' style={{display:"flex", justifyContent:"space-between"}}> <PwBtn/>
                                                    <HiOutlinePencilAlt
                                                        style={{
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={closeModal}/>  </div>                                              
                                            </Modal>
                                    }

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
    margin-left: 45px;
    .comment-wrap{
        
        .review-header{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            
            h4{
                color:#35c5f0;
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
                    cursor:pointer;
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
                    
                    .comment-write-title{
                        
                            .user-comment-wrap{
                            
                                .user-comment{
                                    
                                }
                                .user-time-btn{
                                    display: flex;
                                    justify-content: space-between;
                                    .modal-pw{
                                        width: 200px;
                                        height: 200px;
                                    }
                                    
                                    .usertime{
                                            margin-bottom: 5px;
                                            
                                }    
                                          
                        }
                    }
                    
                }
                
            }
            
        }
        
`