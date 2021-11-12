import { PropsWithChildren } from 'react'

type TMobileModal = {
  isOpen: boolean
  animation: { [key: string]: string }
  toggleAnimation: () => void
  toggleComponent: () => void
}

const MobileModal: React.FC<TMobileModal> = (props: PropsWithChildren<any>) => {
  return (
    <>
      {props.isOpen && (
        <div className='mobile-modal' onAnimationEnd={props.toggleAnimation} style={props.animation}>
          <div>{props.children}</div>
        </div>
      )}
    </>
  )
}

export default MobileModal
