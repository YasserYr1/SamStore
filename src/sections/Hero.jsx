import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigSamsung1 } from "../assets/images"
import Button from "../components/Button"
import ProductCard from "../components/productCard"
import { samsungs, statistics } from "../constants"


const Hero = () => {
  const [bigSamsungImg, setBigSamsungImg] = useState(bigSamsung1)
  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-caribbean-green">Our Best Collection</p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap pr-10">The New Arrival</span>
          <br />
          <span className=" text-caribbean-green inline-block mt-3">Samsung</span> Phone
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Our new
          arrival phone, quality,
          and innovation for your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight}/>
        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index)=>(
            <div key={index}>
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:max-h-screen max-xl:py-40 xl:ml-44">
        <img src={bigSamsungImg} alt="products collection" width={610} height={500}
          className=" object-contain relative z-10"
        />
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:justify-center max-sm:px-6 ">
          {samsungs.map((samsung,index)=>(
            <div key={index}>
              <ProductCard imgUrl={samsung} changeBigSamsungImage={(samsung)=> setBigSamsungImg((samsung))} bigSamsungImg={bigSamsungImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero