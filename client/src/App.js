import React from 'react';
import { Routes, Route } from "react-router-dom";
import './bootstrap.css';

import PetTable from './components/PetTable'
import NewPet from './components/NewPet'
import ViewPet from './components/ViewPet'
import EditPet from './components/EditPet'

function App() {
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Routes>
        <Route path='/' element={<PetTable/>}/>
        <Route path='/new' element={<NewPet/>}/>
        <Route path='/:id' element={<ViewPet/>}/>
        <Route path='/:id/edit' element={<EditPet/>}/>
      </Routes>
    </div>
  );
}

export default App;
