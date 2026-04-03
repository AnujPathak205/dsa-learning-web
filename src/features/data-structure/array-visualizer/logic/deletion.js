import { sleep, getKey } from "./helperFunctions";

export async function handleDeletion(array,setArray,inputIndex,setMessage,setTasking,speed) {
    if(inputIndex == ""){
      setMessage("Please enter an index to delete.");
      return;
    };

    if(inputIndex >= array.length){
      setMessage("Index out of bounds. Cannot delete.");
      return;
    }

    setTasking(true);
    let newArr = [...array];

    setMessage(`Preparing to delete element at index ${inputIndex}...`);

    newArr[inputIndex] = {...newArr[inputIndex],state:"deleted"};
    setArray([...newArr]);

    await sleep(speed+500);

    setMessage("Removing element and shifting remaining elements to the left...");

    for(let i = Number(inputIndex); i < array.length-1; i++){
      newArr[i] = {...newArr[i+1]};
      newArr[i+1] = {id:getKey(),state:"unvisible"};

      setArray([...newArr]);
      await sleep(speed);
    }

    setMessage("Reducing array size after deletion...");

    newArr.splice(newArr.length-1,1);
    setArray([...newArr]);

    await sleep(speed+500);

    setMessage(`Deletion complete: Element at index ${inputIndex} removed.`);
    setTasking(false);
}