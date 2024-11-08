const ProductCard = ({imgUrl, changeBigSamsungImage, bigSamsungImg}) => {
    const handleClick = () => {
        if(bigSamsungImg !== imgUrl.bigSamsung){
            changeBigSamsungImage(imgUrl.bigSamsung)
        }
    }
  return (
    <div className= {`border-2 rounded-xl ${bigSamsungImg==imgUrl.bigSamsung? 'border-caribbean-green': 'bg-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className=" flex justify-center items-center  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
            <img src={imgUrl.bigSamsung} alt="shoe collection" width={127} height={103} className=" object-contain" />
        </div>
    </div>
  )
}

export default ProductCard