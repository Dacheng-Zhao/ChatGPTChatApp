import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from '@/components/chat';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
