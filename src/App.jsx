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
import TableAuthor from './Author/Author';
import TableNovel from './novel/Tablenovel';
import Test from './novel/test';
import ViewAndChapter from './novel/ViewNovel';

function App() {
  return (
    <div>
    <Router>
      <Appbar/>
        <Routes>
          <Route path="/" element={<ImageUploadForm />} />
          <Route path="/page" element={<Pagenovel />} />
          <Route path="/createnovel" element={<TableNovel />} />
          <Route path="/tag" element={<EnhancedTable />} />
          <Route path="/type" element={<TypeEnhancedTable />} />
          <Route path="/admin" element={<TableAdmin />} />
          <Route path="/user" element={<TableUse />} />
          <Route path="/author" element={<TableAuthor />} />
          <Route path="/a" element={<Tset />} />
          <Route path="/s" element={<Test />} />
          <Route path="/content" element={<ViewAndChapter />} />
        </Routes>
      
    </Router>
    </div>
  );
}
export default App;
