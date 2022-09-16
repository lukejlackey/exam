import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PetForm = (props) => {

    const { id } = useParams();
    const submitRoute = props.submitRoute;
    const [pet, setPet] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/pets/${id}`)
            .then(res => {
            console.log(res.data.pet);
            setPet(res.data.pet);
    })}
    }, [])

    const handleChange = (e, keyName) => {
        const newVal = {};
        newVal[keyName] = e.target.value;
        setPet(Object.assign(pet, newVal))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (
            submitRoute === 'new'?
            axios.post("http://localhost:8000/pets/" + submitRoute, {
            ...pet
            }):
            axios.put("http://localhost:8000/pets/" + submitRoute, {
            ...pet
            })
        )            
            .then(res=>{
                console.log(pet)
                setErrors([]);
                console.log(res);
                res.data.error? setErrors(res.data.error.errors) : navigate('/');
            })
            .catch(err=>console.log(err))
    }

    const handleCancel = (e) => {
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onInput={(e) => handleChange(e, 'name')} defaultValue={pet.name}/>
                    {
                        errors['name']?
                        <p>{errors['name']['message']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" onInput={(e) => handleChange(e, 'type')} defaultValue={pet.type}/>
                    {
                        errors['type']?
                        <p>{errors['type']['message']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" onInput={(e) => handleChange(e, 'description')} defaultValue={pet.description}/>
                    {
                        errors['description']?
                        <p>{errors['description']['message']}</p>:
                        ''
                    }
                </div>
            </div>
            <div>
                <h3>Skills (optional):</h3>
                <div>
                    <label htmlFor="skill1">Skill 1:</label>
                    <input type="text" id="skill1" onInput={(e) => handleChange(e, 'skill1')} defaultValue={pet.skill1}/>
                    {
                        errors['skill1']?
                        <p>{errors['skill1']['message']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="skill2">Skill 2:</label>
                    <input type="text" id="skill2" onInput={(e) => handleChange(e, 'skill2')} defaultValue={pet.skill2}/>
                    {
                        errors['skill2']?
                        <p>{errors['skill2']['message']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="skill3">Skill 3:</label>
                    <input type="text" id="skill3" onInput={(e) => handleChange(e, 'skill3')} defaultValue={pet.skill3}/>
                    {
                        errors['skill3']?
                        <p>{errors['skill3']['message']}</p>:
                        ''
                    }
                </div>
            </div>
            <div>
                <button onClick={handleCancel}>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default PetForm