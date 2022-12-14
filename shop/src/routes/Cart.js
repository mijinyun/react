import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, PlusAge, PlusAge2 } from '../store/userSlice';
import { addCount,removeCart } from '../store';
import { useEffect, useState, memo } from 'react';

//memo : 꼭 필요할때만 재렌더링 (props가 변할때만)
let Child = memo(function() {
    console.log('재렌더링 확인');
    return <div>자식 컴포넌트</div>
})


function Cart() {  

    let state = useSelector((state) => {return state}) //store에 있는 state를 꺼내쓰는 것.
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        
        <div>
            <Child count={count}></Child>
            <button onClick={() => {setCount(count+1)}}>+</button>
            <h6>{state.user.name}</h6>
            <h6>{state.user.age}</h6>
            <button onClick={() => {dispatch(PlusAge())}}>버튼</button>
            <button onClick={() => {dispatch(PlusAge2(100))}}>버튼2</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.products.map((product) => {
                            return (
                                <tr>
                                    <th>{product.id}</th>
                                    <th>{product.name}</th>
                                    <th>{product.count}</th>
                                    <th><button onClick={() => dispatch(addCount(product.id))}>+</button></th>
                                    <th><button onClick={() => dispatch(removeCart(product.id))}>삭제</button></th>
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