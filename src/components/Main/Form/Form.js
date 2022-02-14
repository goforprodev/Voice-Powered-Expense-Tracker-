import React,{useContext,useState} from "react"
import {TextField,Typography,Grid,Button,FormControl,Select,MenuItem,InputLabel} from "@material-ui/core";
import useStyles from "./styles"
import {v4 as uuidv4} from "uuid"

import {ExpenseTrackerContext} from "../../../context/context"
import {incomeCategories,expenseCategories} from "../../../constants/categories"
//utils
import formatDate from "../../../utils/formatDate"



//create an initalstate
const initialState = {
    amount:'',
    type:'Income',
    category:'',
    date: formatDate(new Date("2015-03-25"))
}
const Form = () => {
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const [formData,setFormData] = useState(initialState)
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

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
                            <MenuItem value={"Expense"}>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                            {
                                selectedCategories.map((c,idx) => (<MenuItem key={idx} value={c.type}>{c.type}</MenuItem>))
                            }
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
                     defaultValue={formatDate(Date.now())}
                    onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})}
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