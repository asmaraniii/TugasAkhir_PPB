import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';

const DetailContainer = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    text-align: center; /* Pusatkan semua elemen di dalam container */
`;

const DetailImg = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem; /* Tambahkan jarak di bawah gambar */
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

const PageContainer = styled.div`
    margin: 0 20px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 1rem; /* Jarak antara judul dan deskripsi */
    color: #333;
    text-align: center; /* Pastikan judul juga di tengah */
`;

const BackButton = styled.button`
    margin-top: 2rem; /* Jarak yang lebih besar dari elemen lainnya */
    padding: 10px 20px;
    background-color: #1a202c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2d3748;
    }
`;

const Description = styled.p`
    font-size: 16px; /* Ukuran font yang lebih besar agar mudah dibaca */
    color: #555;
    margin: 1rem 0; /* Jarak atas dan bawah deskripsi */
    line-height: 1.6; /* Tambahkan line-height untuk keterbacaan */
    text-align: center; /* Pusatkan deskripsi di tengah */
`;

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState(null);
    const navigate = useNavigate(); // useNavigate hook

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    console.error('Invalid URL: No "id" parameter found.');
                    return;
                }

                const response = await axios.get(
                    `https://api.unsplash.com/photos/${id}`,
                    {
                        params: {
                            client_id: 'U2z6gxwaT0bJRUOYwt-NTz_EelpsVwzNWYsSGH8gnD4',
                        },
                    }
                );

                setDetailData(response.data);
            } catch (error) {
                console.error('Error fetching image details:', error.message);
            }
        };

        fetchData();
    }, [id]);

    return (
        <PageContainer>
            <DetailContainer>
                {detailData ? (
                    <>
                        <DetailImg src={detailData.urls.regular} alt={detailData.alt_description || 'Image'} />
                        <Title>{detailData.alt_description || 'Image Detail'}</Title>
                        <Description>
                            {detailData.description ||
                                detailData.alt_description ||
                                'Gambar ini tidak memiliki deskripsi yang tersedia. Namun, gambar ini adalah representasi visual yang menarik yang dapat diinterpretasikan dengan berbagai cara sesuai imajinasi Anda.'}
                        </Description>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                {/* Tombol kembali */}
                <BackButton onClick={() => navigate(-1)}>Kembali</BackButton>
            </DetailContainer>
        </PageContainer>
    );
};

export default Detail;
