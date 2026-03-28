import React from 'react'
import {stackData} from '../data/StackData';
import TopicContent from '../components/TopicContent'

export default function Stack() {
  return (
    <div>
      <TopicContent data={stackData} />
    </div>
  )
}
