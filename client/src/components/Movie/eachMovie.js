import {Link} from "react-router-dom";
import notFound from "./notFound.jpg";


import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { Col, Row } from "react-bootstrap";

export const EachMovie = (props) => {
    let poster = props.moviePoster;
    return (
        <div className='movieStack' onClick={(e) => props.onClickFunc(props.index)}>
            <div className="eachMovie">
            <Link  to={`/movies/${props.index}`}><img alt="moviePoster" onError={() => notFound}  src={poster} className="moviePoster"/></Link>
            <Row className="justify-content">
                <Col size={30}><span className=""> <IoIosStar />{props.movieRating} </span></Col>
                <Col><span className=""> {(props.movieTitle).toUpperCase()} </span>{" "}</Col>
                <Col><span className=""> {(props.movieLanguage).toUpperCase()} </span></Col>
                
            </Row>
            </div>
            <div>
            </div>
            
        </div>

        
    );
}
