import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TaskInput