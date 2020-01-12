import React, {useState, useEffect } from 'react';
import firebase from '../firebase'

const SORT_OPTIONS = {
    'TIME_ASC': {column: 'time_seconds', direction: 'asc'},
    'TIME_DESC': {column: 'time_seconds', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'}
}

const useTimes = (sortBy = 'TITLE_ASC') => {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsuscribe = firebase
          .firestore()
          .collection('times')
          .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
          .onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTimes(newTimes)
          })
          return () => unsuscribe()
    }, [sortBy])

    return times
}

const TimeList = () => {
    const [sortBy, setSortBy] = useState('TITLE_ASC')
    const times = useTimes(sortBy)

    const deleteTime = (id) => {
        firebase
          .firestore()
          .collection('times')
          .doc(id)
          .delete()
    }
    return (
      <div>
        <h2>Lista de Tiempos</h2>
        <div>
          <label>Ordenar por:</label>
          <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
            <option value="TIME_ASC">Tiempo (menor a mayor)</option>
            <option value="TIME_DESC">Tiempo (mayor a menor)</option>
            <option disabled>--</option>
            <option value="TITLE_ASC">Titulo (z-a)</option>
            <option value="TITLE_DESC">Titulo (a-z)</option>
          </select>
        </div>
        <ol>
            {times.map((time) =>
            <li key={time.id}>
                <div className="time-entry">
                    {time.title}
                    <code className="time">{time.time_seconds} segundos</code>
                    <button onClick={() => deleteTime(time.id)}>Eliminar</button>
                </div>
            </li>
            )}
        </ol>
      </div>
    )
}

export default TimeList