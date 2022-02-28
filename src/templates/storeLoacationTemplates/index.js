import Header from "../../components/Header";
import StoreCard from "../../components/StoreCard";
import PlaceNav from "../../components/PlaceNav";
import Breadcrumb from "../../components/Breadcrumb";
import { getData } from "../../services/api";
import React, { useEffect, useState } from "react";

function Index() {
  const [loading, setLoading] = useState(true);
  const [storeData, setStoreData] = useState();

  const fethData = async () => {
    try {
      const { data } = await getData({ url: "http://54.253.29.55/api/stores" });
      console.log(data.data);
      setStoreData(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fethData();
  }, []);

  return (
    <>
      <Header />
      <Breadcrumb />
      {loading === false ? (
      <div className="md:max-w-[720] lg:max-w-[970px] xl:max-w-[1200] 2xl:max-w-[1300px]  mx-auto">
        <div className="flex flex-wrap mx-0 ">
          <div className="p-0 basis-0 grow max-w-full border-r border-gray-100 hidden sm:inline">
            <PlaceNav />
          </div>

          <div className="md:grow-0 md:shrink-0 sm:basis-3/4 sm:max-w-[75%]">
            <div className="pt-0 px-1 sm:px-9 pb-6 relative mt-0 min-h-[calc(100vh - 130px)] md:px-6 mx-auto">
              <h2 className="text-4xl font-bold mt-2 mb-4">Our Stores</h2>

              <div className="w-full px-3 py-3 bg-gray-100  flex flex-wrap items-center rounded-md mb-3">
                <span className="flex">
                  <img src="img/search.svg" />
                </span>

                <input
                  type="text"
                  className="outline-none bg-transparent ml-3 text-lg"
                  placeholder="Search Store"
                />
              </div>

              <hr></hr>
              {storeData.map((data, index) => (
                <StoreCard data={data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      ) : (<></>)}
      {/* <StoreCard /> */}
      {/* <PlaceNav/> */}
    </>
  );
}
export default Index;
