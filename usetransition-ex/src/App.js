import { useState, useTransition, useDeferredValue } from 'react';

function App() {
  let [ name, setName ] = useState('');

  let arr = new Array(10000).fill(0);
  let [ isPending , startTransition ] = useTransition()
  let state = useDeferredValue(name); //여기 넣어진 변수에 변동사항이 생기면 늦게 처리됨.

  return (
    <div className="App">
      <input onChange={(e) => { 
        startTransition(() => { //startTransition으로 성능저하 원인 부분을 감싸준다. startTransition == 늦게처리
          setName(e.target.value )
        })
        }} />
      {/* 성능저하 일으켜보기! */}
      {

        isPending ? '로딩중' : //isPending은 startTransition 처리중일때 True
        arr.map(() => {
          return <div>{name}</div>
        })
      }
    </div>
  );
}

export default App;
