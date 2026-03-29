import {
  Boxes,
  Link as LinkIcon,
  Layers,
  ListOrdered,
  ArrowDownUp,
  Undo2,
  GitBranch,
  Repeat,
  Coins
} from "lucide-react";

export const topics = [
  {
    name: "Array",
    path: "/topics/data-structures/array",
    desc: "Stores elements in contiguous memory with fast indexed access.",
    icon: Boxes,
    type: "data-structure"
  },
  {
    name: "Linked List",
    path: "/topics/data-structures/linkedlist",
    desc: "Dynamic structure where nodes are connected using pointers.",
    icon: LinkIcon,
    type: "data-structure"
  },
  {
    name: "Stack",
    path: "/topics/data-structures/stack",
    desc: "Linear structure following LIFO order (Last In, First Out).",
    icon: Layers,
    type: "data-structure"
  },
  {
    name: "Queue",
    path: "/topics/data-structures/queue",
    desc: "Processes elements in FIFO order (First In, First Out).",
    icon: ListOrdered,
    type: "data-structure"
  },
  {
    name: "Sorting",
    path: "/topics/algorithms/sorting",
    desc: "Algorithms to arrange data efficiently in a specific order.",
    icon: ArrowDownUp,
    type: "algorithm"
  },
  {
    name: "Backtracking",
    path: "/topics/algorithms/backtracking",
    desc: "Explores all possibilities and backtracks when a path fails.",
    icon: Undo2,
    type: "algorithm"
  },
  {
    name: "Divide and Conquer",
    path: "/topics/algorithms/divide-and-conquer",
    desc: "Breaks problems into smaller subproblems and solves recursively.",
    icon: GitBranch,
    type: "algorithm"
  },
  {
    name: "Recursion",
    path: "/topics/algorithms/recursion",
    desc: "Solves problems by calling itself on smaller inputs until a base condition is met.",
    icon: Repeat,
    type: "algorithm"
  },
  {
    name: "Greedy Algorithm",
    path: "/topics/algorithms/greedy",
    desc: "Builds a solution step by step by choosing the locally optimal choice at each step.",
    icon: Coins,
    type: "algorithm"
  }
];