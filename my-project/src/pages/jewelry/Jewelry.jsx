import Products from "./components/Products";
import { Helmet } from "react-helmet-async"
import Filter from "./components/Filter";
import Sort from "./components/Sort";
export default function Jewelry() {
    return (
        <main>
        <Helmet>
            <title>
                Jewelry -shavan.world
            </title>
        </Helmet>
            <div className="flex items-start justify-between px-4 md:px-8 lg:px-12 py-3">
                <Filter />
                <Sort />
            </div>
            <Products />
        </main>
    )
}