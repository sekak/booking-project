import './error.css'
import { BsEmojiFrown } from "react-icons/bs";


const Error = ({ type , message}) => {

    const FetchData = () => {
        return (
            <div className='containerErr'>
                <div className='WrapperErr'>
                    <BsEmojiFrown className='emojiErr'/>
                    <h2>{message}</h2>
                </div>
            </div>
        )
    }

    if(type == "data") return  <FetchData/>
}

export default Error
