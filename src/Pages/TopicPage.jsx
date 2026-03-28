import React from 'react'
import { useParams } from 'react-router-dom' 
import Stack from '../features/Stack';
import Queue from '../features/Queue';

export default function TopicPage() {
  const {topicId} = useParams();



  return (
    <div>
      {topicId == 'stack' && <Stack />}
      {topicId == 'queue' && <Queue />}

    </div>


  )
}
