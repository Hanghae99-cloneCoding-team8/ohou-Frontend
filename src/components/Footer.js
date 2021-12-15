import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';

const Footer = () => {
    return (<Grid>
        <FooterBox>
            <div class="footer-start">
                <h6>
                    고객센터 >
                </h6>
                <p>
                    <h3>1670-0876</h3>
                </p>
                <p>
                    <h6>평일 09:00 ~ 18:00(주말 & 공휴일 제외)
                    </h6>
                </p>
            </div>
            <MiddleItem>
                <li className="footer-middle-item">브랜드스토리</li>
                <li className="footer-middle-item">회사소개</li>
                <li className="footer-middle-item">채용정보</li>
                <li className="footer-middle-item">이용약관</li>
                <li className="footer-middle-item">개인정보처리방침</li>
                <li className="footer-middle-item">박서담</li>
                <li className="footer-middle-item">이주형</li>
                <li className="footer-middle-item">정해원</li>
                <li className="footer-middle-item">김용빈</li>
                <li className="footer-middle-item">최석영</li>
                <li className="footer-middle-item">고성범</li>
                <li className="footer-middle-item">항해8조</li>
            </MiddleItem>

            <LastItem>
                <li className="footer-last-item">상호명 : (주)플레이스버킷
                </li>
                <li className="footer-last-item">
                    이메일 : (고객문의)cs@complicated.com(제휴문의) contact@hardtolearn.net{' '}
                </li>
                <li className="footer-last-item">
                    대표이사 : XXX 사업자등록번호 : 119-00-53177{' '}
                </li>
                <li className="footer-last-item">
                    통신판매업신고번호 : 제2018-서울서초-0580호{' '}
                </li>
                <li className="footer-last-item">사업자정보확인
                </li>
            </LastItem>
            <p></p>
            <FooterInfo>
                <li className="footer-info-item">
                    오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며 (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및
                    거래 등에 대해 일체 책임을 지지 않습니다.
                </li>
                <li className="footer-info-item">
                    단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는 판매자로서 책임을 부담합니다.{' '}
                </li>
                <p>
                    <li className="footer-info-item">
                        Copyright 2014. bucketplace, Co., Ltd. All rights reserved
                    </li>
                </p>
            </FooterInfo>
        </FooterBox>
    </Grid>
    );
};

export default Footer;

const FooterBox = styled.div`
  justify-content: center;
  align-item: flex-end;
`;

const MiddleItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1px;
  font-size: 0.6rem;
  margin: 10px;
`;

const LastItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  font-size: 0.6rem;
  padding : 10px;
  margin:5px;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;

  font-size: 0.6rem;
  gap: 5px;
`;