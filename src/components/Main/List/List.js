import React,{useContext} from "react"
import {List as MUIList, ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from "@material-ui/core"
import {Delete,MoneyOff} from "@material-ui/icons";
import useStyles from "./styles"

//Import expense context
import ExpenseTrackerContext from "../../../context/context"

const List = () => {
    //using our context
    const {deleteTransaction} = useContext(ExpenseTrackerContext)

    const classes = useStyles()
    const transactions = [
        {id:1,type:'Income',category:'Salary',amount:50,date:"wed dec 16"},
        {id:2,type:'Income',category:'Salary',amount:50,date:"wed dec 16"},
        {id:3,type:'Expense',category:'Expense',amount:50,date:"wed dec 16"},
        {id:4,type:'Income',category:'Salary',amount:50,date:"wed dec 16"},
        {id:5,type:'Income',category:'Salary',amount:50,date:"wed dec 16"}
    ]
    return(
        <MUIList dense={false} className={classes.list}>
            {
                transactions.map(transaction => (
                    <Slide direction={"down"} in mountOnEnter useMountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                            <ListItemSecondaryAction>
                                <IconButton edge={"end"} aria-label={"delete"} onClick={""}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))
            }
        </MUIList>
    )
}

export default List