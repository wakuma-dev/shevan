import { FaInstagram, FaTiktok } from "react-icons/fa";
import SocialLinks from "../data/SocialLinks";

const iconMap = {
  instagram: <FaInstagram size={22} />,
  tiktok: <FaTiktok size={22} />,
};

export default function Social() {
  return (
    <div className="flex mt-4 lg:mt-0 gap-3">
      {SocialLinks.map((item, index) => (
        <a key={index} href={item.path} target="_blank">
          {iconMap[item.icon]}
        </a>
      ))}
    </div>
  );
}
