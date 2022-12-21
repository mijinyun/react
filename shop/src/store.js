// redux store!

import { configureStore,createSlice } from '@reduxjs/toolkit'

// state하나를 slice라 부른다. 
let user = createSlice({ // useState역할
    name : 'user', //state이름
    initialState : 'kim' //실제값
})

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let products = createSlice({
  name: 'product',
  initialState:[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})


export default configureStore({
  reducer: { //여기에 state등록을 해야 컴포넌트들이 사용이 가능!
    user : user.reducer, // 작명 : state.reducer
    stock : stock.reducer,
    products : products.reducer
   }
}) 