import { Box, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(props: any) {
    return (
        <Box sx={(props.theme.palette.mode == 'dark' ?
        {backgroundColor: '#111111', py:5}:
        {backgroundColor: '#DDDDDD', py:5})}
        component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made with 💜 by April Chen, 2023
        </Typography>

        <Box
        sx={(props.theme.palette.mode == 'dark' ?
        {textAlign: 'center', color: '#FFFFFF'}:
        {textAlign: 'center', color: '#111111'})}>
            <IconButton href='https://github.com/aprilschen' target='_blank'>
                <GitHubIcon/>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/schen15/' target='_blank'>
                <LinkedInIcon/>
            </IconButton>
            <IconButton href='https://www.instagram.com/shiwei_chen06' target='_blank'>
                <InstagramIcon/>
            </IconButton>
        </Box>
      </Box>
    );
}