import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
// import fs from 'fs'

interface CounterProps {
  start: number;
}

export default  function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  // const testJsonFile = async () => {
  // const file1 = await Deno.open("../data/lu.json", { read: true });
  
  // // let  dataArray = JSON.parse(file1.read())
  // console.log(file1)

  // }


  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      {/* <Button onClick={testJsonFile}>test </Button> */}
    
    </div>
  );
}
