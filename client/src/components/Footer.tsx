import { BottomNavigation } from '@mui/material';

export default function Footer(props: any) {
    return (
        <BottomNavigation sx={(props.theme.palette.mode == 'dark' ?
        {backgroundColor: '#111111', minHeight: '15vh'}:
        {backgroundColor: '#DDDDDD', minHeight: '15vh'})}
        >
        </BottomNavigation>
    );
}