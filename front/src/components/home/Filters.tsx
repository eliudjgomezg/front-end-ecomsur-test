const Filters: React.FC = () => {
  return (
    <div className='filters'>
      <div>
        <h2>Filtros</h2>
        <p>
          <u>Borrar filtros</u>
        </p>
      </div>

      <h3 className='mt-1'>Por marca</h3>
      <p className=''>mac</p>
      <p className=''>sony</p>

      <h3 className='mt-1'>Precio</h3>
      <p className=''>mac</p>
      <p className=''>sony</p>

      <h3 className='mt-1'>Ordenar por</h3>
      <p className=''>mac</p>
      <p className=''>sony</p>
      <button className='primary-button px-4 mx-auto mt-1'>Filtrar</button>
    </div>
  )
}

export default Filters
