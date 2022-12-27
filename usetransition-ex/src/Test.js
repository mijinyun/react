import { useEffect, useState } from 'react';

const Test = () => {
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);
    
    function add() {
        setCount(count+1);
    }
    useEffect(() => {
        (count !=0 && count < 3) && setAge(age+1);
    },[count]);
    


    return (
        <div>
            <div>안녕하십니까 전 {age}</div>
            <button onClick={add}>누르면 한살 먹기</button>
        </div>
    )
}

export default Test;