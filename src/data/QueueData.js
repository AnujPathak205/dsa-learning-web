export const queueData = {
  title: "Queue",

  description: "A linear data structure that follows FIFO principle.",

  explanation: `
Queue follows FIFO (First In First Out).
The first element added is removed first.

Think of a queue like a line at a ticket counter:
The person who comes first gets served first.
  `,

  operations: [
    {
      name: "Enqueue",
      description: "Add element to the rear of queue"
    },
    {
      name: "Dequeue",
      description: "Remove element from the front"
    },
    {
      name: "Peek",
      description: "View front element without removing"
    }
  ],

  complexity: [
    {
      opName: "enqueue",
      TC: "O(1)"
    },
    {
      opName: "dequeue",
      TC: "O(1)"
    },
    {
      opName: "peek",
      TC: "O(1)"
    },
    {
      opName: "space",
      TC: "O(n)"
    }
  ],

  code: `
// Java Queue Example
import java.util.Queue;
import java.util.LinkedList;

Queue<Integer> queue = new LinkedList<>();

queue.add(10);   // enqueue
queue.add(20);

System.out.println(queue.remove()); // 10 (dequeue)
System.out.println(queue.peek());   // 20
  `,

  realLifeExample: `
Queue at a bus stop or ticket counter.
First person in line is served first.
  `,

  questions: [
    {
      question: "What principle does queue follow?",
      answer: "FIFO (First In First Out)"
    },
    {
      question: "Which operation removes element?",
      answer: "Dequeue"
    },
    {
      question: "What is time complexity of enqueue?",
      answer: "O(1)"
    }
  ],

  practiceLink: "https://leetcode.com/problems/implement-queue-using-stacks/"
};