import { arrowRight } from "../assets/icons"
import { specialOffer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className=" flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
        <img src={specialOffer} alt="offer" className=" object-contain w-full"/>
      </div>
      <div className=" flex flex-1 flex-col">
          <h2 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className=" text-caribbean-green "> Special </span> Offer
          </h2>
          <p className=" mt-6 lg:max-w-lg info-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque aspernatur dicta unde officia placeat inventore aut iure itaque, dignissimos.
          </p>
          <p className=" mt-6 lg:max-w-lg info-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque aspernatur dicta unde officia placeat inventore aut iure.
          </p>
          <div className=" mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconUrl={arrowRight}/>
            <Button label="Learn more" backgroundColor=" bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />

          </div>
      </div>
    </section>
  )
}

export default SpecialOffer