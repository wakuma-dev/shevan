import { useMemo } from "react";
import useJewelryStore from "../../../app/store/useJewelryStore";
import Grid from "../../../components/common/Grid";
import { Link } from "react-router-dom";
import useSortStore from "../../../app/store/useSortStore";

export default function Products() {
  const products = useJewelryStore((state) => state.products);
  const filters = useJewelryStore((state) => state.filters);
  const sortBy = useSortStore((state) => state.sortBy); // 'default', 'price_asc', 'price_desc', 'name_asc', 'name_desc'

  // 1. Apply filters first
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        filters.category?.length === 0 ||
        (filters.category && filters.category.includes(product.category));
      const typeMatch =
        filters.type?.length === 0 ||
        (filters.type && filters.type.includes(product.type));
      const materialMatch =
        filters.material?.length === 0 ||
        (filters.material && filters.material.includes(product.material));
      const priceMatch =
        product.price >= (filters.price?.min ?? 0) &&
        product.price <= (filters.price?.max ?? Infinity);
      return categoryMatch && typeMatch && materialMatch && priceMatch;
    });
  }, [products, filters]);

  // 2. Apply sorting to the filtered products
  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];
    switch (sortBy) {
      case "best-selling":
        return productsToSort.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
      case "price_asc":
        return productsToSort.sort((a, b) => a.price - b.price);
      case "price_desc":
        return productsToSort.sort((a, b) => b.price - a.price);
      case "name_asc":
        return productsToSort.sort((a, b) => a.name.localeCompare(b.name));
      case "name_desc":
        return productsToSort.sort((a, b) => b.name.localeCompare(a.name));
      case "old_to_new":
        return productsToSort.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
      case "new_to_old":
        return productsToSort.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      default: // 'default' or any other value – keep original order (e.g., by id)
        return productsToSort;
    }
  }, [filteredProducts, sortBy]);

  // Show "no products" message when filteredProducts is empty
  if (sortedProducts.length === 0) {
    return (
      <section className="w-full bg-white px-4 md:px-8 lg:px-12">
        <div className="flex justify-start items-center min-h-[400px]">
          <p className="text-[16px] leading-[26px] text-[#030303] font-normal">
            Sorry, there are no products in this collection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12">
      <Grid>
        {sortedProducts.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="block">
            <div className="flex flex-col gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[280px] md:h-[500px] lg:h-[400px] object-cover"
              />
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-[16px] leading-[26px] font-normal hover:text-[#419338] transition-colors duration-150">
                  {item.name}
                </h3>
                <p className="text-[16px] leading-[26px] font-normal hover:text-[#419338] transition-colors duration-150">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Grid>
    </section>
  );
}
