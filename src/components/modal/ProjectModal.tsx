import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";
import {Document, Page , pdfjs} from 'react-pdf';
import { BsFillArrowRightCircleFill ,BsFillArrowLeftCircleFill} from 'react-icons/bs';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type ModalProps = {
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void;
  /** pdf 경로 */
  pdfUrl : string|undefined;

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
  width: 955px;
  position: fixed;
  top: 50%;
  left: 40%;
  height: 580px;
  border: 1px solid black;
  border-radius: 15px;
  transform: translate(-10%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Button = styled.div`
  padding: 16px 0;
  white-space: pre-line;
  text-align: center;
`;

const ProjectModal = ({ visible, onClose ,pdfUrl}: ModalProps) :JSX.Element  => {
  const [isOpen, setIsOpen] = useState(false);

  const [numPages, setNumPages] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visible) {
      setIsOpen(true);
      setNumPages(1);
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
    return <></>;
  }
  

  const pdfPageSet = (e:any) =>{
    setNumPages(numPages);
    setTotalPage(e.numPages)
  }
  const NumPaheSet = (number : number) =>{
    setNumPages(numPages +number);
  }

  return (
    <>
                
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Document file={process.env.PUBLIC_URL + pdfUrl} onLoadSuccess={(e)=>pdfPageSet(e)}>
            <Page pageNumber={numPages} renderTextLayer={false} renderAnnotationLayer={false}/> 
            {/* { // 스크롤 을 이용한 PDF 
                Array.from(new Array(numPages),(_, index) =>(
                    <Page pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false}/>
                ))
            } */}
        </Document> 
        <AiOutlineClose className = "Modalclose" style={{cursor:"pointer"}} onClick={onClose}/>

        <Button>
           {numPages > 1 && <BsFillArrowLeftCircleFill onClick={()=>NumPaheSet(-1)} style={{fontSize:"25px",cursor:"pointer",marginRight:"10px"}}/> }
           {numPages != totalPage && <BsFillArrowRightCircleFill onClick={()=>NumPaheSet(1)} style={{fontSize:"25px",cursor:"pointer"}}/> }
        </Button>
      </ModalSection>
    </>
  );
};

export default ProjectModal;