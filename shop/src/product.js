import { Link, useNavigate } from 'react-router-dom';

const Product = (props) => {

    let navigate = useNavigate();

    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) +".jpg"} width="80%" onClick={() => { navigate('/detail/'+ props.i)}}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            <button className='btn btn-danger'>주문하기</button>
        </div>


    )
}

export default Product;