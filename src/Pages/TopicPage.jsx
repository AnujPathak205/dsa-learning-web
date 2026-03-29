import { useParams } from 'react-router-dom' 
import TopicContent from '../components/TopicContent'

import Array from '../features/Array';
import LinkedList from '../features/LinkedList';
import Stack from '../features/Stack';
import Queue from '../features/Queue';

import {arrayData} from '../data/ArrayData';
import {linkedListData} from '../data/LinkedListData';
import {stackData} from '../data/StackData';
import {queueData} from '../data/QueueData';


export default function TopicPage() {
  const {topicId} = useParams();

  const topics = ['array','linkedlist','stack','queue'];
  const visuals = [<Array />,<LinkedList />,<Stack />,<Queue />];
  const data = [arrayData,linkedListData,stackData,queueData];

  

  return (
    <>
      {topics.map((topic,index) => 
        topic == topicId &&
          <TopicContent data={data[index]} visual={visuals[index]} />
        
      )}
    </>
  )
}
