import { useState, useEffect } from "react";
import { getProducts } from "../../../Services/Product/getProducts";
import { SearchInput, Dropdown, DropdownItem, LinkProductos } from "./styles";
import { Link } from "react-router-dom";

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 && (
        <Dropdown>
          {filteredProducts.map((product) => (
            <LinkProductos key={product.id} to={"/Producto/" + product.id}>
              <DropdownItem
                onClick={() => {
                  setFilteredProducts([]);
                  setSearch("");
                }}
              >
                {product.name}
              </DropdownItem>
            </LinkProductos>
          ))}
        </Dropdown>
      )}
    </>
  );
}

export default SearchBar;
