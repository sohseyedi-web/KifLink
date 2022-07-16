
import Navbar from './Navbar/Navbar';
const Container = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Container