// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Store/Cart/cartThunks";
import { Button, Container, Description, Image, Info, Price, Title } from './ProductPage.style';
import { getProductById } from '../../Services/Product/getProductById';
import { CartIcon } from '../../Shared/Components/CartIcon/CartIcon';

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => { getProductById(id).then(setProduct) }, [id]);

  const handleAddToCart = () => {
    if (product) { dispatch(addProductToCart(product)); }
  };

  if (!product) {
    return (
      <>
        <Container>
          <p>Cargando producto...</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Title>{product.name}</Title>
        <Image src={product.image} alt={product.description} />
        <Info>
          <Description>{product.description}</Description>
          <Price>{product.price}€</Price>
          <Button onClick={handleAddToCart}>Añadir al carrito</Button>
        </Info>
      </Container>
      <CartIcon />
    </>
  );
};

