import React from 'react'

const Loading = () => {
  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: '60vh' }}
  >
    <div className="text-center">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: '3rem', height: '3rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3">Cargando contenido...</p>
    </div>
  </div>
  )
}

export default Loading
