// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories } from "../../Store/Categories/categoriesThunk";
import { startLoadingProducts } from "../../Store/Products/productThunks";
import { selectCategoriesWithProducts } from "../../Store/Categories/selectors";
import {
  PageContainer,
  ProductContainer,
  Section,
  SectionTitle,
  Slider,
  LeftArrow,
  RightArrow,
  Logo,
  LogoWrapper,
} from "./HomePage.styles";
import { addProductToCart } from "../../Store/Cart/cartThunks";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "../../Shared/Components/BounceLoader/BounceLoader";
import { LeftIcon, RightIcon } from "./HomePage.styles";
import LogoImg from "../../Assets/D.png";
import "animate.css";
import AnimatedDownArrow from "../../Shared/Components/DownArrow/DownArrow";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.categories.isLoading);
  const { categories } = useSelector((state) => state.categories);
  const categoriesWithProducts = useSelector(selectCategoriesWithProducts);

  const sliderRefs = useRef({});

  useEffect(() => {
    dispatch(startLoadingCategories());
    dispatch(startLoadingProducts());
  }, [dispatch]);

  const handleAddProductCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: 600, // o la distancia que quieras
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoading ? (
        <BounceLoader />
      ) : (
        <PageContainer>
          <LogoWrapper>
            <Logo src={LogoImg} alt="Logo" />
            <AnimatedDownArrow onClick={handleScrollDown} />
          </LogoWrapper>

          {Array.isArray(categories) &&
            categoriesWithProducts.map((category) => {
              if (!sliderRefs.current[category.id]) {
                sliderRefs.current[category.id] = React.createRef();
              }

              return (
                <Section key={category.id} id={category.name}>
                  <SectionTitle>{category.name}</SectionTitle>

                  <div style={{ position: "relative", width: "100%" }}>
                    <LeftArrow
                      onClick={() => {
                        sliderRefs.current[category.id].current.scrollBy({
                          left: -300,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <LeftIcon />
                    </LeftArrow>

                    <Slider ref={sliderRefs.current[category.id]}>
                      {category.products.map((product) => (
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
                            Añadir al carrito
                          </button>
                        </ProductContainer>
                      ))}
                    </Slider>

                    <RightArrow
                      onClick={() => {
                        sliderRefs.current[category.id].current.scrollBy({
                          left: 300,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <RightIcon />
                    </RightArrow>
                  </div>
                </Section>
              );
            })}
        </PageContainer>
      )}
    </>
  );
};

export default HomePage;
