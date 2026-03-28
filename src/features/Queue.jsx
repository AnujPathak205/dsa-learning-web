import React from 'react'
import {queueData} from '../data/QueueData';
import TopicContent from '../components/TopicContent'

export default function Queue() {
  return (
    <div>
      <TopicContent data={queueData} />
    </div>
  )
}
