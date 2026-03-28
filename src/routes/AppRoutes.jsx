import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage';
import TopicListPage from '../Pages/TopicListPage';
import AboutPage from '../Pages/AboutPage';
import TopicPage from '../Pages/TopicPage';

export default function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/'
                   element={<HomePage />}
            />

            <Route path='/topics'
                   element={<TopicListPage />}
            />
                
            <Route path='/topics/:topicId'
                   element={<TopicPage />}
            />

            <Route path='/about'
                   element={<AboutPage />}
            />
        </Routes>
    </>
  )
}
