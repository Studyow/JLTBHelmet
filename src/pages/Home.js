import Carousel from 'react-bootstrap/Carousel';
import banner01 from '../assets/banners/banner01.jpg';
import banner02 from '../assets/banners/banner02.jpg';
import banner03 from '../assets/banners/banner03.jpg';
import {Row, Col, Button, NavLink} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import LastContent from '../components/LastContent';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function Home() {

    return (
      <>
        <div>
          <Carousel>
            <Carousel.Item>
              <img src={banner01} width="100%" />
              <Carousel.Caption>
                <h3>MOTORCYCLE HELMETS</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={banner02} width="100%" />
              <Carousel.Caption>
                <h3>ORIGINAL HELMETS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={banner03} width="100%" />
              <Carousel.Caption>
                <h3>STREET HELMETS</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="mt-3">
          <Row>
            <Col xs lg="12" className="col-xs-12">
              <Alert key="dark" variant="dark" className="alert-pak2">
                <h5 className="m-0">UP TO 20% OFF SELECT HELMETS</h5>
                <div>
                  <Button
                    href="/store"
                    variant="danger"
                    className="circle-ozz px-1 m-2"
                  ></Button>
                  <Button
                    href="/store"
                    variant="danger"
                    className="circle-ozz px-1 m-1"
                  ></Button>
                  <Button
                    href="/store"
                    variant="danger"
                    id="dropdown-basic"
                    className=""
                  >
                    SHOP NOW
                  </Button>
                </div>
              </Alert>
            </Col>
          </Row>
        </div>

        {/* <Container>
          <div className="mt-2">
            <Row xs={1} md={3} className="g-4">
              {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </Container> */}

        <Container>
          <div className="blog-header">
            <h4>New Producs</h4>
            <Button variant="" href="/blogs">
              {" "}
              View All
            </Button>
          </div>
          <Swiper
            slidesPerView={3}
            // slidesPerView={'auto'}
            // centeredSlides={true}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {/*` product card */}
            {productsArray.map((product, idx) => (
              <SwiperSlide align="center" key={idx}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>

        <Container>
          <LastContent />
        </Container>
      </>
    );
}

export default Home;