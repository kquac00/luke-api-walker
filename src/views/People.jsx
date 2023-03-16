import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Myimage from '../assets/image/Obi_Wan_Kenobi.png'

const People = () => {
    const [person, setPerson] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data)
                setError(false);
            })

            .catch(err => {
                setError(true);
            })

    }, [id])

    return (
        <div>
            {
                error ?
                    <div>
                        <h1>"These aren't the droids you're looking for"</h1>
                        (<img src={Myimage} alt="Obi-Wan Kenobi" />)
                    </div> : (
                        <div>
                            {person && (
                                <div>
                                    <h1>{person.name}</h1>
                                    <p>Day of birth: {person.birth_year}</p>
                                    <p>Eye color: {person.eye_color}</p>
                                    <p>Gender: {person.gender}</p>
                                    <p>Hair color: {person.hair_color}</p>
                                    <p>Height: {person.height}</p>
                                </div>
                
            )}
                        </div>
                    )}
        </div>
    )
}

export default People