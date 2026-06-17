function TaskFilter({ filter, onFilter }) {
  const filters = ['All', 'Active', 'Completed']

  return (
    <div className="task-filter">
      {filters.map(f => (
        <button
          key={f}
          className={filter === f ? 'active' : ''}
          onClick={() => onFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter