import { useState } from 'react'

const useFilterByWord = () => {
  const [word, setWord] = useState('')
  const renderInput = () => {
    return (
      <div className='filter-by-word'>
        <div className='d-desktop'>
          <h3>Nuestros productos</h3>
        </div>
        <input value={word} onChange={(e) => setWord(e.target.value)} className='p--md' placeholder='Busca aquí...' />
        <i className='fas fa-search fa-lg'></i>
      </div>
    )
  }

  return { word, renderInput }
}

export default useFilterByWord
