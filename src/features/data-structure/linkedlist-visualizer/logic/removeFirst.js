import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleRemoveFirst(linkedlist,visualNodes,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setVisualNodesArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));
    let newVisualNodes = visualNodes.map(node => ({ ...node }));


    
    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}