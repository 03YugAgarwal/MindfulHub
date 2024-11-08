import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registration from './components/Registration';
import QuestionnaireForm from './components/QuestionnaireForm';
import Chat from './components/Chat';
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import LiveChat from './components/LiveChat'
import ScheduleChat from './components/ScheduleChat';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/schedulechat" element={<ScheduleChat />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/questionnaireForm" element={<QuestionnaireForm />} />
          <Route path="/livechat" element={<LiveChat />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
