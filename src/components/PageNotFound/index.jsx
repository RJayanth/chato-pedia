import './index.css';
import astronaut from '../../images/astronaut.png';
import galaxyBackground from '../../images/galaxyBackground.jpeg';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='page-not-found-container'>
      <p className='page-not-found-header-text'>
        {' '}
        Oops! the page you are looking for is not found!
      </p>
      <div className='astronaut-container'>
        <img src={galaxyBackground} className='background-image'></img>
        <img src={astronaut} className='astronaut-image'></img>
      </div>

      <p className='page-not-found-footer-text'>
        Oh dear! We lost you somewhere out of the radar, Please come back Home <HouseIcon className="page-not-found-home-icon" onClick={() => navigate('/')}/>
      </p>
    </div>
  );
};

export default PageNotFound;
