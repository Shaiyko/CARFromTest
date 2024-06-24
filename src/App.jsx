// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagenovel from './pahenovel';
import Appbar from './appBar';
import EnhancedTable from './Tag/TAgnovel';
import TypeEnhancedTable from './Type/TypeNovel';
import TableAdmin from './Admin/Admin';
import ImageUploadForm from './Test';
import Tset from './Test';
import TableUse from './User/User';

function App() {
  return (
    <div>
    <Router>
      <Appbar/>
        <Routes>
          <Route path="/" element={<ImageUploadForm />} />
          <Route path="/page" element={<Pagenovel />} />
          <Route path="/tag" element={<EnhancedTable />} />
          <Route path="/type" element={<TypeEnhancedTable />} />
          <Route path="/admin" element={<TableAdmin />} />
          <Route path="/user" element={<TableUse />} />
          <Route path="/a" element={<Tset />} />
        </Routes>
      
    </Router>
    </div>
  );
}

function Home() {
  // หน้าแรกหรือหน้าหลัก
  return <div>Welcome to Home Page</div>;
}

export default App;
