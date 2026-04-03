import { sleep } from "./helperFunctions";

export async function handleSearch(array,setArray,inputValue,setMessage,setTasking,speed) {
  if(inputValue == ""){
    setMessage("Please enter a value to perform linear search");
    return;
  };

  setTasking(true);

  let newArr = [...array];

  for(let i = 0;i < array.length;i++){
    setMessage(`Searching on index ${i}`);
    newArr[i] = {...newArr[i],state:"searching"};
    setArray([...newArr]);
    await sleep(speed+100);
    newArr[i] = {...newArr[i],state:"normal"};
    setArray([...newArr]);

    if(newArr[i].value == inputValue){
      newArr[i] = {...newArr[i],state:"found"};
      setArray([...newArr]);
      
      setMessage(`element ${inputValue} found at index ${i}`);
      await sleep(speed+500);
      newArr[i] = {...newArr[i],state:"normal"};
      setArray([...newArr]);
      return;
    }

  }

  setMessage(`Element ${inputValue} not found in array`);

  setTasking(false);
}