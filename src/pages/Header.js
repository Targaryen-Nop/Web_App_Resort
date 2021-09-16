import React from 'react'

const Header = () => {
    const logoImage = {
        url:'./img/header_edit03.jpg'
    }
    return (
        <>
            <img src={logoImage.url} width='100%' ></img>
        </>
    )
}

export default Header
