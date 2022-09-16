import React from 'react'
import { Link } from 'react-router-dom';
import PetForm from './PetForm';

const NewPet = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <h3>Know a pet needing a home?</h3>
            <PetForm submitRoute='new'/>
        </div>
    )
}

export default NewPet