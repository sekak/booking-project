import './error.css'
import { BsEmojiFrown } from "react-icons/bs";


const Error = ({ type , message}) => {

    const FetchData = () => {
        return (
            <div className={type === "white" ? 'white' : "containerErr"}>
                <div className='WrapperErr'>
                    <BsEmojiFrown className='emojiErr'/>
                    <h2>{message}</h2>
                </div>
            </div>
        )
    }
    return FetchData();
}

export default Error
