import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import CartItem from '../../components/cartItem/CartItem';
import { cartTotal } from '../../selectors/cartSelectors';

const Cart = (props) => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const cartItems = useSelector(({ cart }) => cart.products);
  const cartSum = useSelector(cartTotal);

  return (
    <Fragment>
      <h2 className='my-4'>Shopping Cart</h2>
      <Container>
        <Row>
          <Col sm={9}>
            {!!cartItems && cartItems.length > 0 ? (
              cartItems.map((product) => (
                <CartItem key={product._id} product={product} />
              ))
            ) : (
              <div className='h-100 text-center d-flex flex-column justify-content-center'>
                <i
                  className='fas fa-shopping-cart fa-3x mt-5 mb-2'
                  style={{ color: 'lightgrey' }}
                ></i>
                <h5 style={{ color: 'lightgrey' }}>Cart is empty</h5>
              </div>
            )}
          </Col>
          <Col sm={3} className='my-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='border-bottom mb-4' as='h3'>
                  Cart Summary
                </Card.Title>
                <Card.Subtitle>
                  <h4>Total: ${cartSum}</h4>
                </Card.Subtitle>
                {!!authenticated ? (
                  <LinkContainer to='/checkout'>
                    <Button
                      className='btn-block'
                      disabled={!(!!cartItems && cartItems.length > 0)}
                    >
                      Checkout
                    </Button>
                  </LinkContainer>
                ) : (
                  <Fragment>
                    <LinkContainer to='/checkout'>
                      <Button
                        className='btn-block'
                        disabled={!(!!cartItems && cartItems.length > 0)}
                      >
                        Guest Checkout
                      </Button>
                    </LinkContainer>
                    <h5 className='my-1 text-center'>Or</h5>

                    <LinkContainer
                      to={{
                        pathname: '/login',
                        state: { previousPath: props.location.pathname },
                      }}
                    >
                      <Button
                        className='btn-block'
                        disabled={!(!!cartItems && cartItems.length > 0)}
                      >
                        Sign In & Checkout
                      </Button>
                    </LinkContainer>
                  </Fragment>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cart;
