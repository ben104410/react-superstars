import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* You can add a header or navigation here if needed */}
      <Outlet />
      {/* You can add a footer here if needed */}
    </div>
  );
};

export default Layout;