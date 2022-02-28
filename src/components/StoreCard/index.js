/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function Index() {
    return (
        <>
            <div className="py-8">
                <div className="flex flex-wrap  ">
                    <div className="flex flex-col grow-0 basis-1/2 shrink-0 lg:basis-2/3 lg:max-w-[66.6%] px-4  relative w-full">
                        <div className="flex items-center text-xl
                        text-gray-900 
                        font-bold">Banjos Beerwah </div>
                        <div className="mb-2 text-gray-400">Beerwah Market Place | 22 Peachester Road, Beerwah QLD 4519</div>
                        <div className="flex items-baseline mb-2">
                            <img className="mr-1" src="/img/open.svg" />
                            <span className=" items-baseline ">
                                Open 7 Days | 5am - 6pm (Mon - Fri) | 6am - 6pm (Weekends)
                            </span>
                        </div>
                        <div className="item-center mt-4 hidden lg:flex">
                            <button className="flex items-center text-[#747d42] h-8 px-3 border-gray-200 border rounded-md  mr-2 font-normal text-center align-middle select-none text-[1rem] leading-[1.5]">
                                <img className="mr-2" src="/img/bag.svg" />
                                BANJOS MENU
                            </button>
                            <button className="flex items-center text-[#747d42] h-8 px-3 border-gray-200 border rounded-md  font-normal text-center align-middle select-none text-[1rem] leading-[1.5]"><img className="mr-2" src="/img/v.svg" alt='' /> PLATTERS MENU</button>
                        </div>
                    </div>


                    <div className=" flex grow-0 basis-1/2 shrink-0 lg:basis-1/3 lg:max-w-[33.3%] px-4 relative w-full">
                        <div className="relative ml-auto sm:w-44">
                            <img className="w-full max-w-full rounded-lg object-cover " src="https://banjoslivestorage-ordering.s3.ap-southeast-2.amazonaws.com/stores/5MCns9EesOmheMYHFtIFdAAvUjCUAN6FbBOY5u8R.jpeg" alt="" />
                            <div className="h-10 px-4 bg-red-100 flex items-center justify-center -m-6 relative z-10 mx-4 cursor-pointer
                                text-red-500 rounded-md 
                                shadow-lg ">
                                <img className="
                                   mr-2 align-middle
                                   border-none w-5 max-w-full width rounded-lg 
                                " src="/img/call.svg" alt="" />CALL</div>
                        </div>
                    </div>

                    <div className="mt-6 lg:hidden basis-0 grow max-w-full px-4 relative w-full">
                        <div className="flex items-center">
                            <button className="flex items-center text-[#747d42] h-8 px-3 border-gray-200 border rounded-md font-normal text-center align-middle select-none sm:text-[1rem] leading-[1.5] mr-2 text-[.75rem]">
                                <img className="mr-2" src="/img/bag.svg" /> BANJOS MENU</button>
                            <button className="flex items-center text-[#747d42] h-8 px-3 border-gray-200 border rounded-md  mr-2 font-normal text-center align-middle select-none sm:text-[1rem] leading-[1.5]
                            text-[.7rem]">
                                <img className="mr-2" src="img/v.svg" /> PLATTERS MENU</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index