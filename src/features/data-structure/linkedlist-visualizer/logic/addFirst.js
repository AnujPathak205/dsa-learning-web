import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleAddFirst(linkedlist,visualNodes,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setVisualNodesArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = [...linkedlist];
    let newVisualNodes = visualNodes.map(node => ({ ...node }));;

    steps.push([...newLL]);
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push("Starting add first operation");
    lines.push(1);

    newVisualNodes[0].state = "normal";
    newVisualNodes[0].value = inputValue;
    newVisualNodes[1].state = "null";

    steps.push([...newLL]);
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Creating new node # Node newNode = new Node(${inputValue})`);
    lines.push(3);

    newVisualNodes[0].arrow = "down";
    newVisualNodes[1].state = "unvisible";

    steps.push([...newLL]);
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Link new node to head # newNode.next = head`);
    lines.push(12);

    newVisualNodes[0].arrow = "forward";
    newVisualNodes[0].state = "unvisible";

    newLL.unshift({
        id:getKey(),
        value:inputValue,
        state:"inserted",
        arrow:"forward"
    });

    newVisualNodes.unshift({
        id:getKey(),
        value:inputValue,
        state:"unvisible",
        arrow:"forward"
    });

    steps.push(newLL.map((el) => ({...el}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Move head to new node # head = newNode`);
    lines.push(15);

    newLL[0].state = "normal";

    steps.push(newLL.map((el) => ({...el}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Update size of linked list # size++`);
    lines.push(17);

    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}