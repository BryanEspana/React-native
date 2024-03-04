import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {

  const {count, IncreaseBy, DecreaseBy} = useCounter({initialValue: 10});

  return (
    <>
    <h3>Contador: <small>{count}</small></h3>
    <div>
        <button onClick={() => IncreaseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => DecreaseBy(1)}>-1</button>
    </div>
    </>
  )
}

export default CounterWithHook
