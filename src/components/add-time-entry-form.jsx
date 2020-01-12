import React, { useState } from 'react'

import firebase from '../firebase'

const AddTimeEntryForm = () => {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        firebase
          .firestore()
          .collection('times')
          .add({
              title,
              time_seconds: parseInt(time)
          })
          .then(() => {
              setTitle('')
              setTime('')
          })
    }

    return (
      <form onSubmit={onSubmit}>
        <div>
            <label>Nombre</label>
            <input type='text' required value={title} onChange={e => setTitle(e.currentTarget.value)}/>
        </div>
        <div>
            <label>Tiempo</label>
            <input type='number' required value={time} onChange={e => setTime(e.currentTarget.value)}/>
        </div>
        <button>Crear</button>
      </form>
    )
}

export default AddTimeEntryForm