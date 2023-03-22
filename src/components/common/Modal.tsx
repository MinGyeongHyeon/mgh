import { ReactNode, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";
import { cursorTo, moveCursor } from 'readline';
export type ModalProps = {
  /** 모달에 들어갈 title */
  title?: string;
  /** 모달에 들어갈 내용 */
  content : string ;
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void;
};

// animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// components
const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  inset: -480px;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

const ModalSection = styled.div<{ visible: boolean }>`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 40%;
  height: 400px;
  border: 1px solid black;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const Content = styled.div`
  padding: 16px 0;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const Modal = ({ title , content, visible, onClose }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visible) {
      setIsOpen(true);
    } else {
      timeoutId = setTimeout(() => setIsOpen(false), 1500);
    }

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <p style={{display:"contents"}}>{title}</p>
        <AiOutlineClose className = "Modalclose" style={{cursor:"pointer"}} onClick={onClose}/>
        <hr style={{width:"21vw"}}/>
        <Content>{content}</Content>
      </ModalSection>
    </>
  );
};

export default Modal;