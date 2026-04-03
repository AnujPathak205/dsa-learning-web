function generateInsertionSteps(array) {
    let steps = [];
    let newArr = [...array];

    for (let i = array.length - 1; i >= inputIndex; i--) {
      newArr[i+1] = {...newArr[i]};
      newArr[i] = {id: getKey(), state: "unvisible"};

      steps.push([...newArr]);
    }

    newArr[inputIndex] = {
      id: getKey(),
      value: inputValue,
      state: "inserted"
    };

    steps.push([...newArr]);

    return steps;
}

  export async function handleInsertion(array,inputValue,inputIndex){
    if(inputValue == "" || inputIndex == ""){
      setMessage("Please provide both value and index to insert.");
      return;
    };

    if(inputIndex > array.length){
      setMessage("Index out of bounds. Please enter a valid index.");
      return;
    }
}
