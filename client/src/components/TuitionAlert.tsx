import * as React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

export default function TuitionAlert(props: any) {
    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

    return (
        <HtmlTooltip
            title={
            <React.Fragment>
                <Typography color="inherit"
                >Tuition is overdue</Typography>
                <Typography fontSize={12} sx={{mb: 1}}>
                    Tuition is overdue on the first of each month.
                    <Link sx={props.theme.palette.mode == 'dark' ? {color: 'black'} : {}}>
                        {' Find out how much is overdue '}
                    </Link>
                </Typography>

                <Typography fontSize={12}>
                    You can pay via Stripe through
                    <Link href='https://buy.stripe.com/aEUg2pe2t16CgOk6oo'
                     sx={props.theme.palette.mode == 'dark' ? {color: 'black'} : {}}>
                        {' this link'}
                    </Link>
                    , or by clicking "Pay Tuition" on the navbar.
                </Typography>
            </React.Fragment>}>
            <ErrorIcon sx={{ml: 1}}/>
      </HtmlTooltip>
    );
}