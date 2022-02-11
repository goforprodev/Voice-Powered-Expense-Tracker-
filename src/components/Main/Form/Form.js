import React from "react"
import {TextField,Typography,Grid,Button,FormControl,Select,MenuItem,InputLabel} from "@material-ui/core";
import useStyles from "./styles"
const Form = () => {
    const classes = useStyles()
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align={"center"} variant={"subtitle2"} gutterBottom>
                        ...
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select>
                            <MenuItem value={"income"}>Income</MenuItem>
                            <MenuItem value={"expense"}>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select>
                            <MenuItem value={"business"}>Business</MenuItem>
                            <MenuItem value={"salary"}>Salary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type={"number"} label={"Amount"} fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField type={"date"} label={"Date"}  fullWidth />
                </Grid>
                <Button className={classes.button} variant={"outlined"} color={"primary"} fullWidth>
                    Create
                </Button>
            </Grid>
        </div>
    )
}

export default Form;