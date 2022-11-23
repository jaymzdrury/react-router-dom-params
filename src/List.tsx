import {useParams} from 'react-router-dom'
function List() {
  const params = useParams()
  const {id} = params
  return (
    <div>{id}</div>
  )
}

export default List