import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByCategory } from "../../Services/Product/getProductByCategory";
import { ProductContainer, Grid } from "./ProductByCategory.styles";
import { addProductToCart } from "../../Store/Cart/cartThunks";
import { useDispatch } from "react-redux";
import { CartIcon } from "../../Shared/Components/CartIcon/CartIcon";

const ProductByCategory = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { CategoryId } = useParams();
  useEffect(() => {
    getProductByCategory(CategoryId).then(setProducts);
  }, [CategoryId]);

  const handleAddProductCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <Grid>
      {products?.map((product) => (
        <ProductContainer
          key={product.id}
          className="product"
          onClick={() => {
            navigate("/Producto/" + product.id);
          }}
        >
          <img src={product.image} alt={product.description} />
          <p>{product.name}</p>
          <p>{product.price}€</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddProductCart(product);
            }}
          >
            añadir al carrito
          </button>
        </ProductContainer>
      ))}

      <CartIcon />
    </Grid>
  );
};

export default ProductByCategory;
