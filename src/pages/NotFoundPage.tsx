import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 text-[#3a3a3a] 
            mx-7 my-10 px-24 py-8 custom-border surface-color
            ">
                <span className="text-7xl font-bold text-[#3a3a3a]">404</span>
                <p>Not found page.</p>
                <Link to={"/"} className="primary-button text-center">
                    Go home
                </Link> 
            </div>  
        </div>
    )
}

export default NotFoundPage;