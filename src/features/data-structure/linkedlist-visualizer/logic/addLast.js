import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleAddLast(linkedlist,visualNodes,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setVisualNodesArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));
    let newVisualNodes = visualNodes.map(node => ({ ...node }));

    steps.push(newLL.map(node => ({...node}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push("Starting add last operation");
    lines.push(1);

    newVisualNodes[size-1].state = "normal";
    newVisualNodes[size-1].value = inputValue;
    newVisualNodes[size].state = "null";

    steps.push(newLL.map(node => ({...node}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Creating new Node with value ${inputValue} `);
    lines.push(3);

    newLL[size-1].arrow = "up";
    newLL[size].state = "unvisible";

    steps.push(newLL.map(node => ({...node}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`updating tail.next =  # newNode.next = head`);
    lines.push(12);

    newLL[size-1].arrow = "forward";

    newLL.pop();

    newLL.push({
        id:getKey(),
        value:inputValue,
        state:"inserted",
        arrow:"forward"
    });

    newLL.push({
        id:getKey(),
        value:0,
        state:"null",
        arrow:"forward"
    });
    
    newVisualNodes.unshift({
        id:getKey(),
        value:inputValue,
        state:"unvisible",
        arrow:"forward"
    });

    newVisualNodes[size+1].arrow = "forward";
    newVisualNodes[size+1].state = "unvisible";

    newVisualNodes[size].arrow = "forward";
    newVisualNodes[size].state = "unvisible";

    steps.push(newLL.map((el) => ({...el}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`updating head # head = newNode`);
    lines.push(15);

    newLL[size].state = "normal";

    steps.push(newLL.map((el) => ({...el}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Increasing size # size++`);
    lines.push(17);

    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}