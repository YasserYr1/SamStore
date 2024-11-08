import { tv } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className=" flex justify-between items-center max-lg:flex-col gap-1
     w-full max-container">
      <div className=" flex flex-1 flex-col">
          <h2 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className=" text-caribbean-green "> 8K </span>
            <span className=" text-caribbean-green ">Quality</span> TV
          </h2>
          <p className=" mt-4 lg:max-w-lg info-text">Discover Our new TV 
            , 8K supported,
            and the best view in your room.
          </p>
          <div className=" mt-11"> 
            <Button label="View details"/>
          </div>
      </div>
      <div className=" flex-1 flex justify-center items-center" >
        <img src={tv} alt="tv" width={770} height={722} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality