import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer(props: any) {
    return (
        <Box sx={(props.theme.palette.mode == 'dark' ?
        {backgroundColor: '#111111', py:5}:
        {backgroundColor: '#DDDDDD', py:5})}
        component="footer">
        <Typography variant="h6" align="center" gutterBottom
        sx={(props.theme.palette.mode == 'dark' ?
        {color: '#FFFFFF'}:
        {color: '#111111'})}>
            Placeholder Footer
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made with 💜 by April Chen, 2023
        </Typography>
      </Box>
    );
}