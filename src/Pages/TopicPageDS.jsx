import { useParams } from 'react-router-dom' 
import TopicContent from '../components/TopicContentDS'

import Array from '../features/data-structure/Array';
import LinkedList from '../features/data-structure/LinkedList';
import Stack from '../features/data-structure/Stack';
import Queue from '../features/data-structure/Queue';

import {arrayData} from '../data/data-structure/ArrayData';
import {linkedListData} from '../data/data-structure/LinkedListData';
import {stackData} from '../data/data-structure/StackData';
import {queueData} from '../data/data-structure/QueueData';
import PageNotFoundPage from './PageNotFoundPage';


export default function TopicPageDS() {
  const {topicId} = useParams();

  const topics = ['array','linkedlist','stack','queue'];
  const visuals = [<Array />,<LinkedList />,<Stack />,<Queue />];
  const data = [arrayData,linkedListData,stackData,queueData];

  const index = topics.indexOf(topicId);

  if(index === -1){
    return <PageNotFoundPage />;
  }

  return (
    <>
      <TopicContent data={data[index]} visual={visuals[index]} />
    </>
  )
}
