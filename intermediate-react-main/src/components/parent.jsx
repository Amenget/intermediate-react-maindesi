import ChildComponent from "./child";
import { useEffect, useState , useRef} from "react";
import{Link} from"react-router-dom";

export default function ParentComponent() {
    
    const [learnMoreButtonClicked, setLearnMoreButtonClicked] = useState(false);  
    const vistors = useRef(0);

    useEffect(() => {
        // setVistors(vistors + 1)
        return ()=>{
        }
    }, []);
     
    return (
      <div className="flex flex-col items-center justify-center ">

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100">
          We invest in the world’s potential
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic development.
        </p>
        <a
          href="#"
          onClick={() => {
            setLearnMoreButtonClicked(!learnMoreButtonClicked); //toggle
          }}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          {learnMoreButtonClicked ? "Back" : " Learn more"}
        </a>
        {/* props */}

        <ChildComponent show={learnMoreButtonClicked ? "learnMore" : "quote"} />
        <p
          ref={vistors}
          className="text-2xl fixed bottom-0 left-0 text-white font-bold"
        >
          Vistors
        </p>
      </div>
    );
}   