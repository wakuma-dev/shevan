import { useMemo } from "react";
import { Link } from "react-router-dom";
import useJewelryStore from "../../../app/store/useJewelryStore";
import useSearchStore from "../../../app/store/useSearchStore";
import useSortStore from "../../../app/store/useSortStore";
import Grid from "../../../components/common/Grid";

export default function Products() {
  const products = useJewelryStore((state) => state.products);
  const filters = useJewelryStore((state) => state.filters);
  const searchQuery = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);
  const sortBy = useSortStore((state) => state.sortBy);

  // 1. Apply search + filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter (if any)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.type.toLowerCase().includes(query) ||
          product.material.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      );
    }

    // Apply category filter
    if (filters.category?.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category),
      );
    }

    // Apply type filter
    if (filters.type?.length > 0) {
      result = result.filter((product) => filters.type.includes(product.type));
    }

    // Apply material filter
    if (filters.material?.length > 0) {
      result = result.filter((product) =>
        filters.material.includes(product.material),
      );
    }

    // Apply price filter
    const minPrice = filters.price?.min ?? 0;
    const maxPrice = filters.price?.max ?? Infinity;
    result = result.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice,
    );

    return result;
  }, [products, searchQuery, filters]);

  // 2. Apply sorting
  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];
    switch (sortBy) {
      case "best-selling":
        return productsToSort.sort(
          (a, b) => (b.soldCount || 0) - (a.soldCount || 0),
        );
      case "price_asc":
        return productsToSort.sort((a, b) => a.price - b.price);
      case "price_desc":
        return productsToSort.sort((a, b) => b.price - a.price);
      case "name_asc":
        return productsToSort.sort((a, b) => a.name.localeCompare(b.name));
      case "name_desc":
        return productsToSort.sort((a, b) => b.name.localeCompare(a.name));
      case "old_to_new":
        return productsToSort.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
      case "new_to_old":
        return productsToSort.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      default:
        return productsToSort;
    }
  }, [filteredProducts, sortBy]);

  const handleProductClick = () => {
    setQuery("");
  };

  if (sortedProducts.length === 0) {
    return (
      <section className="w-full bg-white px-4 md:px-8 lg:px-12">
        <div className="flex justify-start items-center min-h-[400px]">
          <p className="text-[16px] leading-[26px] font-roboto-serif text-[#030303] font-normal">
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
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="block"
            onClick={handleProductClick}
          >
            <div className="flex flex-col gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[280px] md:h-[500px] lg:h-[400px] object-cover"
              />
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-[16px] leading-[26px] font-roboto-serif font-normal hover:text-[#419338] transition-colors duration-150">
                  {item.name}
                </h3>
                <p className="text-[16px] leading-[26px] font-roboto-serif font-normal hover:text-[#419338] transition-colors duration-150">
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
