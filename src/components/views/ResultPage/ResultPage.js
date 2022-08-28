import React from 'react'
import { Link } from 'react-router-dom';
import "./ResultPage.css";
import Result from "./Result";
import styled from "styled-components";  //React 컴포넌트 스타일링

const Pass = () => {
    return (
        <div>
            <div className="pass_logo">
                <img src="img/합격로고.svg" />
            </div>
            <div class="pass_title">축하합니다!</div>
            <div class="pass_des1">이화이언 수습운영진 서류 전형에 합격하셨습니다.</div>
            <div class="pass_des2">
                면접 일정은 문자로 공지 드릴 예정입니다. <br />
                심층면접 진행 전, 설문하러 가기 버튼을 통해 설문을 진행해주세요.
            </div>
            <div class="survey">
                <a href="">설문하러 가기</a>
            </div>
        </div>
    )
}

const Pass_D = () => {
    return (
        <div>
            <div className="pass_logo">
                <img src="img/합격로고.svg" />
            </div>
            <div class="pass_title">축하합니다!</div>
            <div class="pass_des1">이화이언 수습운영진 서류 전형에 합격하셨습니다.</div>
            <div class="pass_des2">
                면접 일정은 문자로 공지 드릴 예정입니다. <br />
                심층면접 진행 전, 설문하러 가기 버튼을 통해 설문을 진행해주세요.
            </div>
            <div class="survey" >
                <a href="">설문하러 가기</a>
                <br />
            </div>
            <div class="prework" style={{ marginBottom: 200, marginTop: 100 }}>
                <div class="prework__">
                    <span>
                        1차 서류면접 합격을 축하드리며, 면접 전 사전 과제를 공지해드립니다. <br />
                        사전 과제는 
                        <span class="prework_highlight">'이화이언 계절 배너 제작'</span>
                        입니다. <br /><br />
                        사전과제는 <span class="prework_highlight">9월 4일 (일요일) 밤 12시</span>
                        까지 <br /> <span class="prework_highlight">wwwewhaiancom@hanmail.net</span> 으로 보내주시면 됩니다.    
                    </span>
                    
                </div>
            </div>

        </div>
    )
}

const FinalPass = () => {
    return (
        <div>
            <div className="pass_logo">
                <img src="img/합격로고.svg" />
            </div>
            <div class="pass_title">축하합니다!</div>
            <div class="pass_des1" >이화이언 수습운영진 모집에 최종 합격하셨습니다.</div>
            <br />
            <div class="pass_des2" style={{marginBottom: 200}}>
                이화이언 수습운영진 활동에 대한 안내를 드리기 위해 정규회의에 앞서 온라인으로 마스터 교육을 진행합니다.<br />
                마스터 교육은 <b>0월 0일 0요일 오후 7시 10분</b>부터 하단의 줌 링크를 통해 진행될 예정입니다.<br />
                참석이 어려우면 사유를 공지받은 번호로 알려주시기 바랍니다.<br /><br />
                <a href="www.naver.com" style={{color: "#666666"}}>Zoom Link로 이동하기</a><br /><br />
                감사합니다.
            </div>
        </div>
    )
}

const Fail = () =>{
    return(
        <div>
            <div className="apply-success">
                <img src="img/apply-success.svg" />
            </div>
            <div class="pass_title">지원해주셔서 감사합니다.</div>
            <div class="pass_des1" >이화이언 수습운영진 모집에 불합격하셨습니다.</div>
            <br />
            <div class="pass_des2" style={{marginBottom: 200}}>
                제한된 인원에 따라 아쉽게도 함께하지 못하게 되었습니다.<br />
                지원해주신 점 감사드리며, 다음에 더 좋은 인연으로 다시 만나뵙기를 기원합니다.
            </div>
        </div>
    )
}



function LoginPage() {



    const Input = styled.input`
        position: relative;
        width: 350px;
        height: 35px;
        outline-style: none;
        background: #D9D9D9;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding-left: 15px;
        margin-left: 25px;
        font-size: 20px;
    `;

    const Button = styled.button`
        width: 600px;
        height: 60px;
        background: #ec1468;
        border-radius: 30px;
        color: white;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 20px;
        border: none;
        box-shadow: 0px 10px 20px rgba(236, 20, 104, 0.35);
        
    `;



    return (
        
        <div>
            <Result />
            <Fail />
        </div>


    )
}

export default LoginPage
