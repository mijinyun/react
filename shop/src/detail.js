import Product from './product';

const Detail = (props) => {

    return(
    <>
          <div calssName='container'>
            <div className='row'>
            {/* <Product shoes={shoes} i={0}/>
            <Product shoes={shoes} i={1}/>
            <Product shoes={shoes} i={2}/> */}
    
            {
              props.shoes.map(function(a,i){
                return (
                <Product shoes={props.shoes[i]} i={i} />
              )})
            }
    
            </div>
          </div>
    </>
    )
}

export default Detail;