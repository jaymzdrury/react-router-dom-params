import {useNavigate} from 'react-router-dom'
function Lists() {
  const navigate = useNavigate()
  return (<>{[1,2,3,4].map(list => <div onClick={() => navigate(`/${list}`)} key={list}>{list}</div>)}</>)
}
export default Lists