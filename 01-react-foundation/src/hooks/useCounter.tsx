import { useState } from "react";

interface Options {
  initialValue: number;
}

export const useCounter = ({initialValue = 0}: Options) => {
  const [count, setCount] = useState<number>(initialValue)

    const IncreaseBy = (num: number) => {
      const newValue = count + num;
      if(newValue < 0) return;
        setCount(count + num);
      

    }
    const DecreaseBy = (num: number) => {
      const newValue = count + num;
      if(newValue > 1) {
        setCount(count - num);
      }

        
    }

  return {
    //Properties
    count, 

    //Methods
    IncreaseBy,
    DecreaseBy
  }
  
}
