import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter);

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold text-gray-800">Counter</h1>
                    <div className="flex items-center gap-4 mt-4">
                        <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg" onClick={() => dispatch({ type: "DECREMENT", payload:{
                            test: "decrease the count by one"
                        } })}>-</button>
                        <span className="text-2xl font-semibold text-gray-800">{state.count}</span>
                        <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg" onClick={() => dispatch({ type: "INCREMENT", payload:{
                            test: "increase the count by one"
                        } })}>+</button>
                    </div>
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg mt-4" onClick={() => dispatch({ type: "RESET",payload:{
                        test: "reset the count"
                    } })}>Reset</button>
                    <p className="mt-4 text-gray-800">{state.test}</p>
                </div>
            </div>
        </>
    );

}