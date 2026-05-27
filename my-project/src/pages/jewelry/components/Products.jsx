import { FiDivideCircle } from "react-icons/fi";
import useJewelryStore from "../../../app/store/useJewelryStore";
import Grid from "../../../components/common/Grid";
import { Link } from "react-router-dom";
export default function Products() {
    const products = useJewelryStore((state) => state.products);
    return (
       <section className="w-full bg-white px-4 md:px-8 lg:px-12">
         <Grid>
           {products.map((item) => {
            return (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="block"
          >
            <div className="flex flex-col gap-2">
                <img src={item.image} 
                alt={item.name}
                className="w-full h-[500px] object-cover"
                />
                <div className="flex justify-between">
                    <h3 className="text-[16px] leading-[26px] font-normal hover:text-[#419338] transition-colors duration-150">{item.name}</h3>
                    <p className="text-[16px] leading-[26px] font-normal hover:text-[#419338] transition-colors duration-150">${item.price.toFixed(2)}</p>
                    
                </div>
            </div>
          </Link>
            )
           })}
         </Grid>
       </section>
    )
}