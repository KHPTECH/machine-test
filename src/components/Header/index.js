import { Badge , Avatar } from "antd";
import  'antd/lib/badge/style/index.css';
function Index() {
  return (
    <>
      <section>
        <div className="flex flex-row justify-between mx-2 items-center">
          <div className="flex space-x-2 font-bold capitalize text-2xl items-center">
            <div>
              <img src="logo.svg" alt="" />
            </div>
            <div>store location</div>
          </div>
          <div className="flex space-x-3 capitalize font-semibold text-lg ">
            <div className="flex" >
            <img src="user.svg" />
              <span className="ml-2">sujith</span>
              
            </div>
            
            <div className='flex'>
            <Badge count={5}>
                <img src="cart.svg" />
              </Badge>
              <span className="ml-1">cart</span>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;