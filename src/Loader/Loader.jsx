import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CirclesWithBar } from 'react-loader-spinner'
import '../App.css';
const Loader = () => {
    return (
        <div className="Loader">
        <CirclesWithBar color="red" outerCircleColor="green" />
        </div>
        
    )
}

export default Loader;