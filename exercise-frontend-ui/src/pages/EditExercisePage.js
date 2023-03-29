import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {

    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        // Take the user back to the HomePage
        history.push("/");
    }

    return (
        <>
            <article>
                <h2>Edit an exercise</h2>
                <p>change the fields below to edit an exercise</p>
                <form onSubmit={ (e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which exercise are you adding?</legend>

                        <label for="name">Exercise</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />

                        <label for="reps">Reps</label>
                        <input 
                            type="number"
                            value={reps}
                            onChange={e => setReps(e.target.value)}
                            id="reps" />

                        <label for="weight">Weight</label>
                        <input 
                            type="number"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            id="weight" />

                        <label for="unit">Unit</label>
                        <select id="unit" name="unit" onChange={e => setUnit(e.target.value)}>
                            <option value="kgs">kgs</option>
                            <option value="lbs">lbs</option>
                            <option value="miles">miles</option>
                            <option value="other">other</option>
                        </select>

                        <label for="date">Date</label>
                        <input 
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date" />

                        <label for="submit">
                            <button
                                onClick={editExercise}
                                id="submit">Save</button> updates to the collection
                        </label>

                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditExercisePage;