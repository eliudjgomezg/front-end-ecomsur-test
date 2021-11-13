import routes from 'constants/routes'
import { Link } from 'react-router-dom'

const Home: React.FC = (props) => {
  return (
    <div className='total-center'>
      <div className='home'>
        <h1 className='text-primary'>Estimado equipo de Ecomsur.</h1>
        <p className='text-gray mt-1'>
          Bienvenid@s a eFactory. Un ecomerce donde encontraran smartphones, gadgets, notebooks y todo tipo de equipo electrónico
          a los mejores precios del mercado.
        </p>

        <p className='text-gray mt-1'>
          Encuentra con unos cuantos click el dispositivo que buscas usando nuestro sistema de filtros, donde puedes buscar por:
          Palabra claves o marca. Tambien puedes ordenar por precio, raiting o reviews para que puedas tomar la mejor decisión.
        </p>
        <p className='text-gray mt-1'>
          Accede al detalle de un producto haciendo click sobre la imagen del mismo o envía al "Carrito de compras" todos los
          items que desees comprar en los que podrás comprar desde una unidad hasta el stock completo de cada producto.
        </p>
        <h3 className='text-primary mt-1'>Descripción del proyecto.</h3>
        <p className='text-gray mt-1 '>
          El proyecto fue desarrollado en React para la interfaz de usuario, pero se potencia con la ayuda de las siguientes
          librerías:
        </p>
        <p className='text-gray mt-1 '>
          1. react query <br />
          2. sass <br />
          3. react-star-ratings <br />
          4. ESlint5. prettier <br />
          6. react router dom <br />
          7. redux <br />
          8. y por supuesto, con la ayuda del "latoso" pero muy necesario typescript que nos ayuda a reducir los bugs al mínimo
          orquestando todo el uso de los datos.
        </p>
        <p className='text-gray mt-1'>
          Más que lograr el requerimiento, desarrolle una estructura de archivos robusta que va a permitir escalar la aplicación
          de forma fácil y segura, separando los concerns de forma correcta, haciendo código simple y repitiendo patrones siempre
          que sea posible.
        </p>

        <p className='text-gray mt-1'>
          Archivos como routes, enpoints, apiClient, constants ayuda a mantener una estrura de como llevar la logica de negocio.
        </p>

        <p className='text-gray mt-1'>
          El proyecto cuenta con tres vistas:
          <br />
          <br />
          1. Bienvenida <br />
          2. Lista de productos <br />
          3. Detalle de producto <br />
          4. Carro de compras <br />
        </p>

        <p className='text-gray mt-1'>
          Utilizando programación funcional y reactiva, puede manejar el flujo de los datos para que los diferentes componentes
          pudieran reaccionar según los cambios que el usuario ejecute.
        </p>

        <p className='text-gray mt-1'>
          Debido al corto tiempo, hay deuda técnica, de diseño y cosas que se pueden mejorar, que posteriormente se puede resolver
          con mucha facilidad.
        </p>

        <p className='text-gray mt-1'>
          De antemano, muchas gracias por tomarme en cuenta en este proceso de selección y espero que disfruten navegando en la
          app, tal como yo disfrute desarrollarla.
        </p>

        <Link to={routes.products}>
          <button className={`primary-button px-4 mt-1 float-right`}>Comencemos !!!!!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
