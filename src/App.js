import './App.css';
import Header from './Shared/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import CompletedTasks from './Components/CompletedTasks';
import ToDo from './Components/ToDo';
import Calendar from './Components/Calendar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
