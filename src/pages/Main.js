import React from 'react';
import styled from 'styled-components';
import image from '../static/1.jpg'
import Grid from '../elements/Grid'
import Noimg from '../static/no-image.png'
import Toimg from '../static/오늘의딜1.PNG'
import Yoimg from '../static/오늘의딜2.PNG'
import SwiperSlice from "../components/SwiperSlice"

const Main = () => {

    return (
        <MainWrap>
            <Grid>
                <div className='main-banner'>
                    <SwiperSlice/>
                    <Grid is_container="is_container">
                        <ul className='category-nav'>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span >겨울 인기템 특가!</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>자코모 연말세일</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>홈데코 빅세일</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>삼성전자 연말특가</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>생활&수납 최대 89%</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>인테리어 ~58%</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>리퍼 마켓</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>크리스마스 준비!</span>
                                </div>
                            </li>
                            <li className='quick-nav-item' role="button">
                                <div className='quick-nav-content'>
                                    <span>원하는날 무료배송</span>
                                </div>
                            </li>
                        </ul>
                    </Grid>
                </div>
                <Grid is_container="is_container">
                    <div className='today-deal-header'>
                        <text>오늘의 딜</text>
                    </div>

                    <div className='today-deal-wrap'>
                        <img src={Toimg} alt=''/>
                        <img src={Toimg} alt=''/>
                        <img src={Toimg} alt=''/>
                        <img src={Toimg} alt=''/>
                    </div>

                    <div className='category-header'>
                        <h1>카테고리</h1>
                    </div>
                    <div className='category-wrap'>
                        <div className='category-item-wrap'>
                            <a >
                                <div className='catecory-item'>
                                    <img src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163654148296283533.png?gif=1&w=144&h=144&c=c'} alt=''/>
                                    <div className='category-title'>크리스마스</div>
                                </div>
                            </a>
                        </div>
                        <div className='category-item-wrap'>
                            <a>
                                <div className='catecory-item'>
                                    <img src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163572945028172903.png?gif=1&w=144&h=144&c=c'} alt=''/>
                                    <div className='category-title'>겨울용품</div>
                                </div>
                            </a>
                        </div>
                        <div className='category-item-wrap'>
                            <a>
                                <div className='catecory-item'>
                                    <img src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163575474448469686.png?gif=1&w=144&h=144&c=c'} alt=''/>
                                    <div className='category-title'>생필품</div>
                                </div>
                            </a>
                        </div>
                        <div className='category-item-wrap'>
                            <a>
                                <div className='catecory-item'>
                                    <img src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=144&h=144&c=c'} alt=''/>
                                    <div className='category-title'>패브릭</div>
                                </div>
                            </a>
                        </div>
                        <div className='category-item-wrap'>
                            <a>
                                <div className='catecory-item'>
                                    <img src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231401891024.png?gif=1&w=144&h=144&c=c'} alt=''/>
                                    <div className='category-title'>반려동물</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='category-posts'>
                        <a href="/postdetail">
                        <img src={Yoimg} alt=''/>
                        </a>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                        <img src={Yoimg} alt=''/>
                    </div>
                </Grid>
            </Grid>
        </MainWrap>
    );
};

export default Main;

const MainWrap = styled.section `
    .main-banner{
        .banner-img{
            width: 100%;
            min-height: 380px;
        }

        .category-nav{
            display: flex;
            justify-content: center;

            .quick-nav-item{
                -webkit-box-flex: 1;
                -webkit-flex: 1 1 100%;
                -moz-box-flex: 1;
                -moz-flex: 1 1 100%;
                -ms-flex: 1 1 100%;
                flex: 1 1 100%;
                cursor: pointer;
                position: relative;
                padding: 0;
                border-bottom: 1px solid #ededed;
                background-color: #fff;
                transition: border .2s ease-in-out,
                background-color .2s ease-in-out,color .2s ease-in-out;
                min-width: 0;
                margin-bottom: 20px;

                .quick-nav-content{
                    border-right: 1px solid transparent;
                    background-clip: padding-box;
                    transition: background-color .2s ease-in-out;

                    span{
                        display: block;
                        max-width: 160px;
                        padding: 0 2px;
                        margin: 0 auto;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #424242;
                        font-size: 13px;
                        text-decoration: none;
                        font-weight: 400;
                        font-stretch: normal;
                        font-style: normal;
                        letter-spacing: normal;
                        white-space: nowrap;
                        text-align: center;
                        line-height: 40px;
                    }
                }
            }
        } 
    }
    .today-deal-header{
        display: flex;
        margin-bottom: 20px;
        text{
            font-size: 30px;
            text-align: left; 
        }
    }
    .today-deal-wrap{
        display: flex;
        justify-content: space-between;
        img{
        width: 269px;
        height: 416px;
        margin-bottom: 20px;
        
        }
    }
    .category-header{
        display: flex;
        margin-bottom: 20px;
    }
    .category-wrap{
        display: flex;
        justify-content: space-between;
        .category-item-wrap{
            .category-title{
                text-align: center;
            }
            margin-bottom: 50px;
            img{
                width: 80px;
                height: 80px;
            }
        }
    }
    .category-posts{
        display: flex;
        flex-wrap: wrap;
        a{
            img{
            width: 100%;
            height: 416px;
        }
     }
       
}
    
`