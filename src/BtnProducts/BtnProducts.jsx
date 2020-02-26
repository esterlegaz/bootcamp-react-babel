import React from 'react';
import './BtnProducts.scss';
import Button from '@material-ui/core/Button';

function BtnProducts(props) {
  return (
      <Button variant="contained" color="primary" onClick={props.handleClick}>
        {props.text}
      </Button>  )
}

export default BtnProducts;