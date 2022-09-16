import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';


const ViewPet = () => {

    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
        console.log(res.data.pet);
        setPet(res.data.pet);
    })
    }, [clicked])

    const adopt = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    const like = () => {
        setPet(Object.assign(pet, {likes : pet.likes? pet.likes + 1 : 1}));
        console.log(pet)
        axios.put(`http://localhost:8000/api/pets/edit/${id}`,
            pet
        )
            .then(res => {
                console.log(res);
                setClicked(true);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>Details about: {pet.name}</h2>
            <button onClick={adopt}>Adopt {pet.name}</button>
            <div>
                <label htmlFor='type'>Pet type:</label>
                <p id='type' name='type'>{pet.type}</p>
                <label htmlFor='description'>Description:</label>
                <p id='description' name='description'>{pet.description}</p>
                <label htmlFor='skills'>Skills:</label>
                <ul id='skills' name='skills'>
                    {
                        pet.skill1?
                        <li>{pet.skill1}</li>:''
                    }
                    {
                        pet.skill2?
                        <li>{pet.skill2}</li>:''
                    }
                    {
                        pet.skill3?
                        <li>{pet.skill3}</li>:''
                    }
                </ul>
            </div>
            <div>
                <button onClick={like} disabled={clicked}>Like {pet.name}</button>
                <p>{pet.likes? pet.likes : 0} like(s)</p>
            </div>
        </div>
    )
}

export default ViewPet