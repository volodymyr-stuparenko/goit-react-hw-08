import { Box, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

const HomePage = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" component="h1">
        <ContactsIcon sx={{ color: 'primary.main' }} />
        &nbsp;Contact Book
      </Typography>
    </Box>
  );
};

export default HomePage;
