import React, {useContext} from 'react'
import GlobalContext from '../store/GlobalContext'

const Charlie = () => {
    const {state, dispatch} = useContext(GlobalContext)
  return (
    <div>{state.name}</div>
  )
}

export default Charlie