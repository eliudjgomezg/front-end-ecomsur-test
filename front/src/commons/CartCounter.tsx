type TCartCounter = {
  hasStock: boolean
  className?: string
}

const CartCounter: React.FC<TCartCounter> = (props) => {
  return (
    <div className={`${props.className} cart-items`}>
      <h3>1</h3>
      <div>
        <i className='fas fa-chevron-circle-down text-primary mr-05 cursor-pointer fa-lg'></i>
        <i className='fas fa-chevron-circle-up text-primary cursor-pointer fa-lg'></i>
      </div>
    </div>
  )
}

export default CartCounter
