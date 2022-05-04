import React from 'react'
import "./Header.css"

export default function Header() {

    function refreshPage() {
        window.location.reload(false);
    }
  return (
      <>
    <div className="header">
        <div className="header-container">
            <h3 className="logo" onClick={refreshPage}>bloom</h3>
            <div className="navbar"></div>
        </div>
    </div>
    </>
  )
}
