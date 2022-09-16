import React from 'react'
import { Link, useParams } from 'react-router-dom';
import PetForm from './PetForm';

const EditPet = () => {

    const { id } = useParams();

    return (
        <div>
            <Link to='/'>Home</Link>
            <h3>Edit this pet:</h3>
            <PetForm submitRoute={`edit/${id}`} />
        </div>
    )
}

export default EditPet