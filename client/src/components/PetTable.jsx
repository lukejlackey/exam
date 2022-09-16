import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PetTable = () => {

    const [pets, setPets] = useState([]);
    const [deletedProduct, setDeletedProduct] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/pets/all')
            .then(res => {
                console.log(res);
                setPets(res.data.pets);
            })
    }, [deletedProduct])

    const handleEditBtn = (e, id) => {
        navigate(`pets/${id}/edit`)
    }


    return (
        <div>
            <Link to='pets/new'>Add an pet</Link>
            <h3>These pets are looking for a good home:</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.sort((a, b) => (a.type.toUpperCase() > b.type.toUpperCase())? 1:-1).map((pet, i) =>
                            <tr key={i}>
                                <td>
                                    <p>{pet.name}</p>
                                </td>
                                <td>
                                    <p>{pet.type}</p>
                                </td>
                                <td>
                                    <Link to={`/${pet._id}`}>details</Link>
                                    <button onClick={(e) => handleEditBtn(e, pet._id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PetTable