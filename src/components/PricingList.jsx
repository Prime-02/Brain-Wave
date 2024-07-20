import { check } from "../assets";
import Buttons from "./Buttons";
import { pricing } from "./Index";
import Pricing from "./Pricing";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-6 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 "
          key={item.id}
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-4-rem mb-3 text-n-1/50">{item.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6 ">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
              </>
            )}
          </div>
          <Buttons className='w-full mb-6' href={item.price? '/pricing':"#"} white={!!item.price}>
            {item.price?'Get started':'Contact Us'}
          </Buttons>
          <ul>
            {item.features.map((feature, index)=>(
                <li key={index} className="flex items-start py-5 border-t border-n-6 mt-3">
                    <img src={check} alt="" width={24} height={24}/>
                    <p className="body-2 ml-2">
                        {feature}
                    </p>
                </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
