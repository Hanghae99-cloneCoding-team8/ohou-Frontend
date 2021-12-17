import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ className, visible, children,onClose,maskClosable,closable }) => {

    
        const onMaskClick = (e) => {
            if (e.target === e.currentTarget) {
              onClose(e)
            }
          }
        
          const close = (e) => {
            if (onClose) {
              onClose(e)
            }
          }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible} onClick={maskClosable ? onMaskClick : null}>
        <ModalInner tabIndex="0" className="modal-inner">
        {closable && <CloseButton text="확인" className="modal-close" onClick={close} />}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
const CloseButton = styled.button`
    width:315px;
    height: 60px;
    background-color:#EDEDED;
    color: #757575;
    border : 1px solid #EDEDED;
    margin: 15px 0px 0px 0px;
    padding : 14px 15px 14px 15px;
    display: block;
    cursor : pointer;
    box-sizing:border-box;
`;
Modal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
  }
  export default Modal;