import React from 'react'
import { Link } from 'react-router-dom'

export default function TopicListPage() {
  return (
    <div>
      <h1>There are many topics:</h1>
      <Link to='/topics/stack'>Stack</Link><br />
      <Link to='/topics/queue'>Queue</Link>
    </div>
  )
}
