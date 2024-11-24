import React, { useState } from 'react';
import { BsHouseDoor, BsInfoCircle, BsListUl, BsPerson, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1a202c;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px; /* Tinggi diperbesar untuk menampung teks */
    z-index: 999;
`;

const NavigationButton = styled(Link)`
    display: flex;
    flex-direction: column; /* Ikon dan teks akan berbaris vertikal */
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => (props.active ? '#555' : '#fff')};
    font-family: 'Poppins, sans-serif';
    transition: 0.3s;
    z-index: 999;

    &:hover {
        color: #555;
        transform: scale(0.9);
    }
    
    &:active {
        color: #555;
        transform: scale(1.1);
        transition: 0.3s;
    }
`;

const Label = styled.span`
    font-size: 10px;
    margin-top: 5px; /* Memberikan jarak antara ikon dan teks */
`;

const ContentContainer = styled.div`
    margin-bottom: 60px;
`;

const BottomNavBar = () => {
    const containerHeight = 40;
    const iconSize = containerHeight * 0.5;

    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <ContentContainer>
            </ContentContainer>
            <NavigationContainer>
                <NavigationButton to="/categories" active={activeLink === '/categories'} onClick={() => handleLinkClick('/categories')}>
                    <BsListUl size={iconSize} />
                    <Label>Categories</Label>
                </NavigationButton>
                <NavigationButton to="/search" active={activeLink === '/search'} onClick={() => handleLinkClick('/search')}>
                    <BsSearch size={iconSize} />
                    <Label>Search</Label>
                </NavigationButton>
                <NavigationButton to="/" active={activeLink === '/'} onClick={() => handleLinkClick('/')}>
                    <BsHouseDoor size={iconSize} />
                    <Label>Home</Label>
                </NavigationButton>
                <NavigationButton to="/account" active={activeLink === '/account'} onClick={() => handleLinkClick('/account')}>
                    <BsPerson size={iconSize} />
                    <Label>Account</Label>
                </NavigationButton>
                <NavigationButton to="/about" active={activeLink === '/about'} onClick={() => handleLinkClick('/about')}>
                    <BsInfoCircle size={iconSize} />
                    <Label>About</Label>
                </NavigationButton>
            </NavigationContainer>
        </div>
    );
};

export default BottomNavBar;
