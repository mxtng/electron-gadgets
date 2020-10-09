import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';

import { addItem, decrementItem, removeItem } from '../../actions/cartActions';

import './CartItem.css';

const CartItem = ({ product, addItem, decrementItem, removeItem }) => {
  return (
    <Fragment>
      <Row className='border-bottom py-3'>
        <Col sm={6} md={2}>
          <Image className='img-fluid img-size' src={product.img} />
        </Col>
        <Col sm={6} md={5} className='mt-4'>
          {product.title}
        </Col>
        <Col xs={6} sm={6} md={4} lg={3} className='mt-4'>
          <span>
            <Button className='' onClick={() => decrementItem(product)}>
              -
            </Button>
            <span className='mx-1'>Qty: {product.qty}</span>
            <Button
              className=''
              onClick={() => {
                addItem(product);
              }}
            >
              +
            </Button>
          </span>

          <div className='mt-4'>
            <h5>Subtotal: ${product.qty * product.price.replace(/,/g, '')}</h5>
          </div>
        </Col>
        <Col xs={6} sm={6} md={1} className='mt-4'>
          <Button className='btn-mini' onClick={() => removeItem(product)}>
            X
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { addItem, decrementItem, removeItem })(CartItem);