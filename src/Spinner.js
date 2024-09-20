import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Spinner() {

        return (
            <Box className ="spinner">
              <CircularProgress size={400} />
            </Box>
          );

}

export default Spinner;