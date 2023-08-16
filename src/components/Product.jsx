export default function Product(){
    return (
        <div className="flex flex-col justify-center items-center w-auto">
                <div className="flex justify-end items-start">
                    <img className="2xl:h-[300px] 2xl:w-[300px] lg:h-[280px] lg:w-[280px] md:h-[240px] md:w-[240px] object-cover" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="absolute mt-5 mr-3">
                        <span className="pr-[5px] pl-[5px] pt-[10px] pb-[10px] rounded-[3px] bg-[#FE0000] text-white font-semibold text-base">R$ 260,90</span>
                    </div>
                </div>
                <div className="bg-black 2xl:w-[300px]  lg:w-[280px] md:w-[240px] w-full p-3.5 flex flex-col gap-2.5 items-center justify-center ">
                    <div className="">
                        <h3 className="font-normal text-[20px] text-white capitalize">Camiseta Branca</h3>
                    </div>
                    <div className="">
                        <button className="bg-white text-black pr-[25px] pl-[25px] pt-[5px] pb-[5px] rounded-[3px]"><i className="pr-1.5 bi bi-cart-plus"></i>Comprar</button>
                    </div>
                </div>
            </div>

    )
}