import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Myimage from '../assets/image/Obi_Wan_Kenobi.png'

const Planets = () => {
    const [planet, setPlanet] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data)
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
                            {planet && (
                                <div>
                                    <h1>{planet.name}</h1>
                                    <p>Climate: {planet.climate}</p>
                                    <p>Diameter: {planet.diameter}</p>
                                    <p>Orbital period: {planet.orbital_period}</p>
                                    <p>Population: {planet.population}</p>
                                    <p>Terrain: {planet.terrain}</p>
                                </div>
                            )}
                        </div>
                    )}
        </div>
    )
}

export default Planets