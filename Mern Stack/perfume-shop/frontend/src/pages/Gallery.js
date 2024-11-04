import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css'; // Import the CSS file for styling

const productImages = [
  {
    name: 'Citrus Splash',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oYyX7tybZSo8pm0tIRsnuFXGG5CQLcihlmgZLjQv1mCtu8ZnzDzXjXCQNqsYxPmWgIw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5plWi0mvOBsHmY8-LFTTb35qIRWgdRuW1BgEVnyn0SOxExfhK-uMmxjccLVapISjXiw&usqp=CAU'

    ]
  },
  {
    name: 'Amber Nights',
    images: [
      'https://dev.guerlain.com/dw/image/v2/BDCZ_DEV/on/demandware.static/-/Sites-GSA_master_catalog/default/dw7c566db3/Secondary_visuals_2/2021/A&M/AM_SECONDARY-VISUAL_PRODUCT-PAGE_SANTAL-PAO-ROSA.jpg?sw=655&sh=655&sfrm=jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0f6RfvcCKsXEoWigRIKHFVXaP9TXOXQ5HFCH4rBMulg9n_daFEpOkrJsKdN8w5rIK5Y&usqp=CAU'
    ]
  }, {
    name: 'Floral Essence',
    shortDescription: 'Bloom with every spritz.',
    fullDescription: 'Floral Essence offers a bouquet of fresh flowers, perfect for springtime.',
    price: 65.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDLwTHJR_mv_loZ482Yo39sXh5dIuO9081Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6VaCas1-pXKH3GqwK7mJUsmLQbahck_Jpb0dWKW0DXGSrdS2m4LdVHTegwClb6EsXyo&usqp=CAU'
    ]
  },
  {
    name: 'Mystic Oud',
    shortDescription: 'Deep and alluring.',
    fullDescription: 'Mystic Oud combines rich oud notes with hints of amber for a captivating aroma.',
    price: 120.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://perfumeuae.com/wp-content/uploads/2024/07/Habit-Rouge-Le-Parfum-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-FcmkqjP75eniqAyKNRspTC4xvjYnuHXhPL7DH7rHEpSn40vxvIlKB4VfYlCtilCTG0&usqp=CAU'
    ]
  }
];

function Gallery() {
  return (
    <Container className="gallery-container my-5">
      <h1 className="gallery-title">Gallery</h1>
      {productImages.map((product, index) => (
        <Row key={index} className="justify-content-center">
          {product.images.map((image, imageIndex) => (
            <Col key={imageIndex} md={4} className="gallery-item">
              <img src={image} alt={product.name} className="gallery-image" />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Gallery;