const Footer: React.FC = () => {
  return (
    <div className='bg-primary'>
      <div className='footer container'>
        <div className='footer__column-one'>
          <h1>eFactory</h1>
          <p>Siguenos en:</p>
          <i className='fab fa-facebook-f fa-lg cursor-pointer'></i>
          <i className='fab fa-instagram fa-lg cursor-pointer'></i>
          <i className='fab fa-youtube fa-lg cursor-pointer'></i>
        </div>

        <div>
          <h3>Servicio al cliente</h3>
          <p className='cursor-pointer'>Términos y Condiciones</p>
          <p className='cursor-pointer'>Orden de Servicio</p>
          <p className='cursor-pointer'>Representante Legal</p>
          <p className='cursor-pointer'>Bases y Promociones</p>
        </div>

        <div>
          <h3>eFactory EMPRESA</h3>
          <p className='cursor-pointer'>Nuestra Empresa</p>
          <p className='cursor-pointer'>Servicio Postventa</p>
          <p className='cursor-pointer'>Mapa Productos</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
