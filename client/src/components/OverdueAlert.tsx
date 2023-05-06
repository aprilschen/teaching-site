import * as React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


export default function OverdueAlert() {
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
                <Typography color="inherit">Homework is overdue</Typography>
                If you can't finish it before the next class, let me know beforehand.
            </React.Fragment>
            }>
            <ErrorIcon />
      </HtmlTooltip>
    );
}