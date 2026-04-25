export const linkedListData = {
  title: "Linked List",

  description: "A linear data structure where elements are stored in nodes and linked using pointers.",

  explanation: `
Linked List consists of nodes.
Each node contains:
1. Data
2. Pointer to next node

Elements are not stored in contiguous memory.

Types:
- Singly Linked List
- Doubly Linked List
  `,

  operations: [
    {
      name: "Insertion",
      description: "Add node at beginning, middle, or end"
    },
    {
      name: "Deletion",
      description: "Remove node"
    },
    {
      name: "Traversal",
      description: "Visit each node sequentially"
    }
  ],

  complexity: [
    {
      opName: "access",
      TC: "O(n)"
    },
    {
      opName: "insertion",
      TC: "O(1)"
    },
    {
      opName: "deletion",
      TC: "O(1)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  code: {
    basic:{
    java: `
// Java LinkedList Example
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
    `,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = NULL;
    }
};
    `,

    python: `
# Python Linked List Example
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    `
  },

  addFirst:{
    java:`public void addFirst(int data){
  //1. Creating new Node
  Node newNode = new Node(data);

  if(head == null){
      head = tail = newNode;
      size++;
      return;
  }

  //2. newNode's next <- head
  newNode.next = head;

  //3.head <- newNode
  head = newNode;

  size++;
}
`,
     cpp:`void addFirst(int data) {
  // 1. Create new node
  Node* newNode = new Node(data);

  if (head == nullptr) {
      head = tail = newNode;
      size++;
      return;
  }

  // 2. newNode->next = head
  newNode->next = head;

  // 3. head = newNode
  head = newNode;

  size++;
}
`,   python:`def addFirst(self, data):
  # 1. Create new node
  newNode = Node(data)

  if self.head is None:
      self.head = self.tail = newNode
      self.size += 1
      return

  # 2. newNode.next = head
  newNode.next = self.head

  # 3. head = new_node
  self.head = new_node

  self.size += 1`
  },

  addLast:{
  java:`public void addLast(int data){
  // 1. Creating new Node
  Node newNode = new Node(data);

  if(head == null){
      head = tail = newNode;
      size++;
      return;
  }

  // 2. tail.next <- newNode
  tail.next = newNode;

  // 3. tail <- newNode
  tail = newNode;

  size++;
}
`,

  cpp:`void addLast(int data){
  // 1. Creating new Node
  Node* newNode = new Node(data);

  if(head == nullptr){
      head = tail = newNode;
      size++;
      return;
  }

  // 2. tail->next = newNode
  tail->next = newNode;

  // 3. tail = newNode
  tail = newNode;

  size++;
}
`,

  python:`def addLast(self, data):
  # 1. Creating new Node
  newNode = Node(data)

  if self.head is None:
      self.head = self.tail = newNode
      self.size += 1
      return

  # 2. tail.next = newNode
  self.tail.next = newNode

  # 3. tail = newNode
  self.tail = newNode

  self.size += 1`
},

removeFirst:{
  java:`public void removeFirst(){
  if(head == null){
      System.out.println("List is already empty");
      return;
  }

  // 1. head <- head.next
  head = head.next;

  // 2. if list becomes empty
  if(head == null){
      tail = null;
  }

  size--;
}
`,

  cpp:`void removeFirst(){
  if(head == nullptr){
      cout << "List is already empty" << endl;
      return;
  }

  // 1. head = head->next
  head = head->next;

  // 2. if list becomes empty
  if(head == nullptr){
      tail = nullptr;
  }

  size--;
}
`,

  python:`def removeFirst(self):
  if self.head is None:
      print("List is already empty")
      return

  # 1. head = head.next
  self.head = self.head.next

  # 2. if list becomes empty
  if self.head is None:
      self.tail = None

  self.size -= 1`
},

removeLast:{
  java:`public void removeLast(){
  if(head == null){
      System.out.println("List is already empty");
      return;
  }

  if(head == tail){
      head = tail = null;
      size--;
      return;
  }

  // 1. Traverse to second last node
  Node node = head;
  while(node.next != tail){
      node = node.next;
  }

  // 2. node.next <- null
  node.next = null;

  // 3. tail <- node
  tail = node;

  size--;
}
`,

  cpp:`void removeLast(){
  if(head == nullptr){
      cout << "List is already empty" << endl;
      return;
  }

  if(head == tail){
      head = tail = nullptr;
      size--;
      return;
  }

  // 1. Traverse to second last node
  Node* node = head;
  while(node->next != tail){
      node = node->next;
  }

  // 2. node->next = nullptr
  node->next = nullptr;

  // 3. tail = node
  tail = node;

  size--;
}
`,

  python:`def removeLast(self):
  if self.head is None:
      print("List is already empty")
      return

  if self.head == self.tail:
      self.head = self.tail = None
      self.size -= 1
      return

  # 1. Traverse to second last node
  node = self.head
  while node.next != self.tail:
      node = node.next

  # 2. node.next = None
  node.next = None

  # 3. tail = node
  self.tail = node

  self.size -= 1`
}
  },

  realLifeExample: `
Linked List is like a treasure hunt:
Each clue (node) tells you where the next clue is.
You cannot directly jump to a position.
  `,

  questions: [
    {
      question: "What does each node contain?",
      answer: "Data and pointer to next node"
    },
    {
      question: "Is linked list stored in contiguous memory?",
      answer: "No"
    },
    {
      question: "What is time complexity of access?",
      answer: "O(n)"
    }
  ],

  quiz: [
  { question: "What is a linked list?", options: ["A linear data structure with contiguous memory", "A linear data structure of nodes connected by pointers", "A stack-like structure", "A queue-like structure"], answer: "A linear data structure of nodes connected by pointers" },
  { question: "Which node points to the first node in a linked list?", options: ["Tail", "Head", "Root", "Top"], answer: "Head" },
  { question: "What is the time complexity to access the middle element in a singly linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
  { question: "Which linked list allows traversal in both directions?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Stack"], answer: "Doubly Linked List" },
  { question: "Which linked list forms a circle?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Stack"], answer: "Circular Linked List" },
  { question: "Insertion at the beginning of a linked list takes what time?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
  { question: "Deletion at the end of a singly linked list takes what time?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
  { question: "Which of these is a real-world analogy for a linked list?", options: ["Train of carriages", "Stack of plates", "Queue of people", "Books on a shelf"], answer: "Train of carriages" },
  { question: "Which pointer is used in a doubly linked list to traverse backward?", options: ["Next", "Previous", "Head", "Tail"], answer: "Previous" },
  { question: "Why is a linked list preferred over an array in dynamic memory?", options: ["Faster indexing", "Flexible size", "Less memory", "Sorted order"], answer: "Flexible size" }
],

practiceLink: [
  "https://leetcode.com/problems/reverse-linked-list/",
  "https://leetcode.com/problems/merge-two-sorted-lists/",
  "https://leetcode.com/problems/linked-list-cycle/"
]};