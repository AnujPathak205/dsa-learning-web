import { getKey } from "./helperFunctions";

export function handleReverse(array,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let newArr = [...array];

    setStepArr([]);
    setOutput("");

    steps.push([...newArr]);
    lines.push(1);
    messages.push("Starting array reversal");

    for(let i = 0; i < n/2; i++){

      newArr[i].state = "searching";
      newArr[n-i-1].state = "searching";

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(3);
      messages.push(`Selecting elements to swap # i = ${i} # j = ${n-i-1}`);

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(4);
      messages.push(`Swapping elements # arr[${i}] = ${newArr[i].value} # arr[${n-i-1}] = ${newArr[n-i-1].value}`);

      newArr[i].state = "normal";
      newArr[n-i-1].state = "normal";

      let temp = {...newArr[i]};
      newArr[i] = {...newArr[n-i-1]};
      newArr[n-i-1] = {...temp};

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(5);
      messages.push(false);
    }

    steps.push([...newArr]);
    lines.push(1);
    messages.push("Array reversal completed");

    setStepArr([...steps]);
    setCurrentLineArr([...lines]);
    setMessageArr([...messages]);
}