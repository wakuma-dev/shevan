import CheckoutDetails from './components/CheckoutDetails';
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import img from '../../assets/Google_Pay-Logo.wine.png'
import img2 from '../../assets/paypal_PNG9.png'
import useForm from "../../hooks/useForm";
export default function Checkout() {

 
  return (
    <main
      className="overflow-x-hidden border-t border-[#DEDEDE]
      bg-white flex flex-col lg:flex-row w-full min-h-screen"
    >
      <Helmet>
        <title>Checkout - shevan.world</title>
      </Helmet>
    <CheckoutDetails />
  </main>
  );
}