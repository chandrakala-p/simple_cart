import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CartItem";
import { v4 } from 'uuid';

import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";


const localurl = "https://myjson.dit.upm.es/api/bins/4e40";
const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);



    const fetchPhotos = async () => {
        const { data } = await Axios.get(localurl, {});

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
            //  id: v4(),
        }));

        setProduct(allProduct);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BuyPage;
