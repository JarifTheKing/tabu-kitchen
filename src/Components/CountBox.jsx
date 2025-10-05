import { CookingPot, Heater, ScrollText } from "lucide-react";

const CountBox = ({totalOrder, totalCookings, totalReadyItems}) => {


    return (
        <div className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Current Orders */}
            <div className="border-4 border-dotted rounded-2xl border-amber-300 p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <ScrollText className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Current Orders
                        <h2 className="text-6xl font-bold">{totalOrder}</h2>
                    </div>
                </div>
            </div>

            {/* Current Cocking */}
            <div className="border-4 border-dotted rounded-2xl  border-amber-300 p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <Heater className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Current Cocking
                        <h2 className="text-6xl font-bold">{totalCookings}</h2>
                    </div>
                </div>
            </div>

            {/* Ready to Serve */}
            <div className="border-4 border-dotted rounded-2xl  border-amber-300 p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <CookingPot className="animate-pulse" color="#fcb700" size={100}/>
                    <div className="text-xl text-center">
                        Ready to Serve
                        <h2 className="text-6xl font-bold">{totalReadyItems}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountBox;