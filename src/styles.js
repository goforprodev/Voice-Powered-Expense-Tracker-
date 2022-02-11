import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    desktop: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    mobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    main: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '5%',
        },
    },
    last: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            paddingBottom: '200px',
        },
    },
    grid: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    header:{
        backgroundClip:'text',
        backgroundImage:'linear-gradient(89.72deg, rgb(178, 80, 255) 5.35%, rgb(80, 140, 255) 26.37%, rgb(0, 159, 250) 35.74%, rgb(0, 228, 143) 93.06%)',

    }
}));