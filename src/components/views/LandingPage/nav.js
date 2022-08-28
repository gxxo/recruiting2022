import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css"

function nav() {
  return (
    <div class="nav">
      <div class="logo">
        <Link to="/">
          <img src="img/logo.svg" />
        </Link>
        
      </div>
      <div class="nav_but">
        <Link
          to="/LoginPage"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          지원하기
        </Link>
        <Link
          to="/Result"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          결과 확인
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          메인으로
        </Link>
      </div>

    </div>
  )
}

export default nav
