import React from 'react'
import "./ResultPage.css";
import styled from "styled-components";  //React 컴포넌트 스타일링

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
        // function pass(){}
        <div class="back">
            <div class="nav">
                <div class="logo">
                    이화이언
                </div>


                <div class="nav_but">
                    <a href="">지원하기</a>
                    <a href="">결과 확인</a>
                    <a href="">과제 제출</a>
                </div>
            </div>

            <img src="client\src\배너.png" alt=""></img>


            <div class="Box">
                <div>
                    <h1>결과 확인</h1>
                </div>

                <form>
                    <table class='table'>
                        <tr class='info'>
                            <td class='info_title'>성명</td>
                            <td class='info_input'><Input /></td>
                        </tr>
                        <tr class='info'>
                            <td class='info_title'>학번 7자리</td>
                            <td class='info_input'><Input /></td>
                        </tr>
                        <tr class='info'>
                            <td class='info_title'>이화이언 ID</td>
                            <td class='info_input'><Input /></td>
                        </tr>
                    </table>
                </form>

                <Button type="submit">확 인</Button>
                
            </div>
        </div>
    )
}

export default LoginPage
