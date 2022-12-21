import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart() {

    let products = useSelector((state) => {return state.products}) //store에 있는 state를 꺼내쓰는 것.
    console.log(products);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr>
                                    <th>{product.id}</th>
                                    <th>{product.name}</th>
                                    <th>{product.count}</th>
                                    <th></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;