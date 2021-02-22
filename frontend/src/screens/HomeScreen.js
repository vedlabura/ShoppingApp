import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import './HomeScreen.css'
import FilterComp from '../components/FilterComp/FilterComp'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-hero-men-1609849949.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-online-Marvel-FYP-hero-banner-men-min-1611925162.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-online-shopping-app-hero-banner-men-1612960565.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className='fresh'>Tshirts</h1>
      <div className='underline'></div>
      <FilterComp />
      <div className='mainpart'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message />
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={18} md={9} lg={6} xl={4}>
                <Link to={'/product/' + product._id} product={product}>
                  <Product product={product} />
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  )
}

export default HomeScreen
