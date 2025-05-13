import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;
