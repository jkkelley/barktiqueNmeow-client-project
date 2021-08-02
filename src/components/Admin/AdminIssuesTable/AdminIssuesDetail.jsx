import {useHistory} from 'react-router-dom';

// import material-ui
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// variable useStyles for class names
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '31.99%',
        flexShrink: 0,
    },
}));

function AdminIssuesDetail({orders, order, key}) {

    // variable for material-ui classes
    const classes = useStyles();
    const history = useHistory();

    console.log('This order ==>', order)

    const handleIssuesClick = (order) => {
        console.log('You clicked handleIssuesClick', order);
        history.push(`/orderpage/${order.order_id}`)
    }

    // // convert to ms
    // let upload = new Date(order.cus_upload_date);
    // let ms = upload.getTime();
    // let currentDate = new Date();
    // let timeStamp = currentDate.getTime();
    // let difference = timeStamp - ms;
    // let fiveDays = 432_000_000;

    // // console logs to see ms 
    // console.log('is timeStamp in ms?', timeStamp);
    // console.log('upload in ms', ms);
    // console.log('This is the time of image upload', upload.toISOString().slice(11, -8));
    // console.log('the difference in time:', difference > fiveDays);
    
    console.log('These are the issues:', orders);

    return (
        <>
            <div 
                className={classes.root}
                
            >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            className={classes.heading}
                            onClick = {() => handleIssuesClick(order)}
                        >
                            Order # {order.cus_order_number}
                        </Typography>
                        <Typography
                            className={classes.heading}
                        >
                            {order.cus_first_name} {order.cus_last_name}
                        </Typography>
                        {orders[0].dateIssues.length > 0 ? (
                            <Typography
                            className={classes.heading}
                        >
                            Date Issue
                        </Typography>
                        ) : ('')}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.secondaryHeading}>
                            Contact Customer: {order.cus_phone_number}
                        </Typography>
                        <Typography className={classes.secondaryHeading}>
                            Email Customer: {order.cus_email}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default AdminIssuesDetail;