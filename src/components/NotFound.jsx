import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const Navigate = useNavigate();
  return (
    <div>
      <h1 className='text-2xl text-center'>fancy 404 page lol... go back to -&gt; 
      <button className='cursor-pointer bg-cyan-200 px-4' onClick={() => {Navigate("/home")}}>Home</button>
      </h1>
    </div>
  )
}

export default NotFound
