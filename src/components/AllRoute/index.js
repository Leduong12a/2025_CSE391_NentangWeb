
import { useRoutes } from 'react-router-dom';
import {routes} from '../../routes/index';

function AllRoute(){
  const elementRoutes = useRoutes(routes);
  
  return(
    <>
    {elementRoutes}
    </>
  )
}

export default AllRoute ;