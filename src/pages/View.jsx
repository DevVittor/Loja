import { useState } from "react";
import Semelhante from "../components/Semelhante";


export default function View(){

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
      };

      const decrementCount = () => {
        if(count > 0){
            setCount(count - 1);
        }

      };

    return (
        <main>
            <section>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-start gap-5 p-3">
                        <div className="flex justify-center items-center h-auto w-2/4">
                            <div className=" flex flex-col gap-3 border-2 border-gray-100">
                                <div className="">
                                    <img className="h-[400px] object-cover " src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex justify-center items-center gap-3 pb-3">
                                    <img className="h-[100px] object-cover rounded-md" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <img className="h-[100px] object-cover rounded-md" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <img className="h-[100px] object-cover rounded-md" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white h-[400px] w-2/4 p-3">
                            <div className="">
                                <h1 className="font-extrabold text-4xl">Câmera Pro 2023</h1>
                            </div>
                            <div className="pt-1">
                                <h2 className="font-medium text-xl">R$ 400,90</h2>
                            </div>
                            <div className="pb-3 pt-3">
                                <p className="font-normal text-gray-800 w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores facere cumque, impedit dolore minus incidunt amet molestias ad culpa dolor dolorum corrupti, aspernatur praesentium sequi ullam sit ipsam architecto fugiat? Harum rerum aliquam dolore. Esse perspiciatis consequatur reiciendis officiis nam laudantium accusantium. Repellendus minima nisi ullam animi, sint accusantium.</p>
                            </div>
                            <div className="">
                                <div className="flex items-center ">
                                    <button className="h-[30px] w-[30px] border-2 border-transparent rounded-[3px] bg-black text-white" onClick={decrementCount}><i className="bi bi-dash"></i></button>
                                    <button className="h-[30px] w-[60px] border-2 border-gray-100 rounded-[3px] bg-white text-black" >{count}</button>
                                    <button className="h-[30px] w-[30px] border-2 border-transparent rounded-[3px] bg-black text-white" onClick={incrementCount}><i className="bi bi-plus"></i></button>
                                </div>
                                <button className="bg-blue-500 font-semibold text-lg text-white pr-8 pl-8 pt-[3px] pb-[3px] rounded-[3px] mt-[20px]">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex gap-3 flex-wrap pt-3 pb-6 pr-3 pl-3">
                    <Semelhante/>
                </div>
            </section>
        </main>
    )
}