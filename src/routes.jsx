import Constants from './constants';
import MainPage from './pages/main/MainPage';
import ProtectPage from './pages/protect/ProtectPage';

const routes = [
  {
    path: Constants.Path.Main,
    element: <MainPage />
  },
  {
    path: Constants.Path.Protect,
    element: <ProtectPage />
  }
];

export default routes;
