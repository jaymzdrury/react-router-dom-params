import {useNavigate} from 'react-router-dom'
function Lists() {
  const navigate = useNavigate()
  return (<>{Array.apply(null, Array(5)).map((_,i) => <div onClick={() => navigate(`/${i}`)} key={i}>{i}</div>)}</>)
}
export default Lists