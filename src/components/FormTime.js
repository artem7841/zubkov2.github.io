import React, { useState } from 'react';
import './Card.css';
import './FormTime.css';

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
};



function FormTime(props) {

    const [isActive, setIsActive] = useState(false); 

    const handleClick = () => {
        setIsActive(true); 
        setTimeout(() => {
        setIsActive(false); 
        }, 300);
    };

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [arrivalTime, setArrivalTime] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const startLatitude = 55.7558; // Широта Москвы
        const startLongitude = 37.6173; // Долгота Москвы

        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);
        const spd = parseFloat(8000); 

        if (!isNaN(lat) && !isNaN(lon) && !isNaN(spd) && spd > 0) {
            const distance = calculateDistance(startLatitude, startLongitude, lat, lon);
            if(distance > 5500) {
                setArrivalTime(null);
            } else {
                const time = distance / spd; 
            setArrivalTime(Math.round(time*100));
            }
            
        } else {
            setArrivalTime(null);
        }
    };

    return (
        <div class="form_time">
            <form onSubmit={handleSubmit}>
                <div class="form_time">
                        <input 
                            type="number" 
                            value={longitude} 
                            placeholder='Широта'
                            onChange={(e) => setLongitude(e.target.value)} 
                            required 
                        />
                </div>
                <div>
                        <input 
                            type="number" 
                            placeholder='Долгота'
                            value={latitude} 
                            onChange={(e) => setLatitude(e.target.value)} 
                            required 
                        />
                </div>
                <button className={`animated-button ${isActive ? 'active' : ''}`} onClick={handleClick} type="submit">Рассчитать</button>
            </form>
            {arrivalTime !== null && (
                <div>
                    <h2>Время прибытия: {arrivalTime} минут</h2>
                </div>
            )}
            {arrivalTime == null && (
                <div>
                    <h2>Слишком большая дистанция</h2>
                </div>
            )}
        </div>
    );
}
export default FormTime;