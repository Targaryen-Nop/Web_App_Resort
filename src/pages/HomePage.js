import React from "react";
import { Carousel, Row, Container, Col } from "react-bootstrap";
import { FaRegNewspaper } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { BsLink45Deg } from 'react-icons/bs';
import ImageLink from "../style/ImageLink";



const HomePage = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 " src="./img/slide.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./img/slide (1).png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slide (2).png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          <Col xs={6}>
            <div className="p-3 border border-primary my-3">
              <h3>
                <FaRegNewspaper /> ข่าวประชาสัมพันธ์
              </h3>
            </div>
          </Col>
          <Col xs={6}>
            <div className="p-3 border border-primary my-3">
              <h3>
                <MdPhotoCamera /> ภาพกิจกรรม
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
        <Col xs={6}>
            <div className="p-3 border border-primary my-3">
            </div>
          </Col>
          <Col xs={6}>
            <div className="p-3 border border-primary my-3">
              <h3>
                <BsLink45Deg /> ลิงค์ที่เกี่ยวข้อง
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="p-3 border border-primary my-3">
             <ImageLink src='./img/link_1.png'></ImageLink>
             <ImageLink src='./img/link_2.png'></ImageLink>
             <ImageLink src='./img/link_3.png'></ImageLink>
             <ImageLink src='./img/link_4.png'></ImageLink>
             <ImageLink src='./img/link_5.png'></ImageLink>
             <ImageLink src='./img/link_6.png'></ImageLink>
             <ImageLink src='./img/link_7.png'></ImageLink>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
