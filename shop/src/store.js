// redux store!

import { configureStore,createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

// 코드가 길면 파일로 따로 빼면 된다! => useSlice.js에 뺐음.
// state하나를 slice라 부른다. 
// let user = createSlice({ // useState역할
//     name : 'user', //state이름
//     initialState : { name: 'kim', age: 20}, //실제값

//     //state수정하는 함수를만들고 원할 때 함수를 실행하달라고 store.js에 요청.
//     reducers : {
//         changeName(state){
//           // return 'john' + state;  //1.state 수정해주는 함수 , object나 array가 아닐경우
//         return { name: 'park', age: 20 } //또는 , state.name = 'park' 해도 수정이 가능함.
//         },
//         PlusAge(state) {
//           state.age += 1
//         },
//         PlusAge2(state,action) {
//           state.age += action.payload
//         }
//     }

// })

// export let { changeName,PlusAge,PlusAge2 } = user.actions //state 변경함수들을 담아서 내보냄.



//----------------------------------------------------------//
let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let products = createSlice({
  name: 'product',
  initialState:[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],

  reducers: {
    Plus(state) {
      console.log();
    }
  }
})

export let { Plus } = products.actions;


export default configureStore({
  reducer: { //여기에 state등록을 해야 컴포넌트들이 사용이 가능!
    user : user.reducer, // 작명 : state.reducer
    stock : stock.reducer,
    products : products.reducer
   }
}) 