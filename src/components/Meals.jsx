import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/meals', { method: 'GET' })
            .then(response => response.json())
            .then(data => setMeals(data));
    }, []);

    return (
        <ul id='meals'>
            {meals.map(meal => (
               <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}