import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App p-8 flex justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/examples"/>}/>
        <Route element={<Main/>} path="/examples" />
        <Route element={<Detail/>} path="/examples/:id" />
        <Route element={<Update/>} path="/examples/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

