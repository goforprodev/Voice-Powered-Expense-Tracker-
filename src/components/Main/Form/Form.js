import React,{useContext,useState} from "react"
import {TextField,Typography,Grid,Button,FormControl,Select,MenuItem,InputLabel} from "@material-ui/core";
import useStyles from "./styles"
import {v4 as uuidv4} from "uuid"

import {ExpenseTrackerContext} from "../../../context/context"

//create an initalstate
const initialState = {
    amount:'',
    type:'Income',
    category:'',
    date: new Date()
}
const Form = () => {
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const [formData,setFormData] = useState(initialState)

    //Create function to createTransactions to be added
    const createTransaction = () => {
        const transaction = {...formData,amount:Number(formData.amount),id:uuidv4()}
        addTransaction(transaction)

        setFormData(initialState)
    }

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
                        <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                            <MenuItem value={"Income"}>Income</MenuItem>
                            <MenuItem value={"expense"}>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                            <MenuItem value={"business"}>Business</MenuItem>
                            <MenuItem value={"salary"}>Salary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type={"number"} label={"Amount"} fullWidth
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField type={"date"} label={"Date"}  fullWidth
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                </Grid>
                <Button className={classes.button} variant={"outlined"} color={"primary"} fullWidth onClick={createTransaction}>
                    Create
                </Button>
            </Grid>
        </div>
    )
}

export default Form;