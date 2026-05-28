import { useMemo } from "react";
import useJewelryStore from "../../../app/store/useJewelryStore";
import Grid from "../../../components/common/Grid";
import { Link } from "react-router-dom";

export default function Products() {
  const products = useJewelryStore((state) => state.products);
  const filters = useJewelryStore((state) => state.filters);

  // Memoized filtered products – recomputes only when products or filters change
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(product.type);
      const materialMatch =
        filters.material.length === 0 ||
        filters.material.includes(product.material);
      const priceMatch =
        product.price >= filters.price.min &&
        product.price <= filters.price.max;
      return categoryMatch && typeMatch && materialMatch && priceMatch;
    });
  }, [products, filters]);

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-12">
      <Grid>
        {filteredProducts.map((item) => (
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
